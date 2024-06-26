import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJWT } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../service/session.service";

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {

    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")

    const refreshToken = get(req, "header.x-refresh")

    if (!accessToken){
        return res.status(401).send("Access token is required");
    }

    const {decoded, expired} = verifyJWT(accessToken);

    if (decoded) {
        res.locals.user = decoded
        return next()
    }

    if (expired && refreshToken){
        const newAccessToken = await reIssueAccessToken({refreshToken})

        if (newAccessToken) {
           res.setHeader("x-access-token", newAccessToken)
        }
        if (newAccessToken === false) {
            return res.status(401).send("Unauthorized");
        }
        
        const result = verifyJWT(newAccessToken)
        res.locals.user = result.decoded;
        return next();
    }

    return next();
}


export default deserializeUser;