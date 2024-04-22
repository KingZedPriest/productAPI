import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";
import { signJWT } from "../utils/jwt.utils";
import config from "config";

export async function createUserSessionHandler(req: Request, res: Response) {
  //Validate the user's password
  const user = await validatePassword(req.body);
  
  if (!user) {
    return res.status(401).send("Invalid email or password");
  }

  //Create a session
  const session = await createSession(user._id, req.get("user-agent") || "")

  //Create an access token
  const accessToken = signJWT (
    {...user, session: session._id},
    { expiresIn: config.get("accessTokenTtl")}
  );

  //Create a refresh token
  const refreshToken = signJWT (
    {...user, session: session._id},
    { expiresIn: config.get("refreshTokenTtl")}
  )

  //Return both tokens
  return res.send({ accessToken, refreshToken })
}
