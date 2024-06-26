import { get } from "lodash";
import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel, { SessionDocument } from "../models/sessions.model";
import { signJWT, verifyJWT } from "../utils/jwt.utils";
import { findUser } from "./user.service";
import config from "config";


//Create Session
export async function createSession(userId: string, userAgent: string) {

    const session = await SessionModel.create({user: userId, userAgent});

    return session.toJSON();

}

//Find Session
export async function findSessions(query: FilterQuery<SessionDocument>) {
    return SessionModel.find(query).lean()
}

//Update Session
export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>){
    return SessionModel.updateOne(query, update);
}

//Reassign Access Token if Refresh Token is Present
export async function reIssueAccessToken({refreshToken}: {refreshToken : string}){
    const {decoded} = verifyJWT(refreshToken)

    if (!decoded || !get(decoded, "session")) return false;

    const session = await SessionModel.findById(get(decoded, "session"));

    if (!session || !session.valid) return false;

    const user = await findUser({_id: session.user})

    if (!user) return false;

    const accessToken = signJWT (
        {...user, session: session._id},
        { expiresIn: config.get("accessTokenTtl")}
    );

    return accessToken
}

