import { Express, Request, Response } from "express";
import { createUserHandler } from "../controller/user.controller";
import validate from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createUserSessionHandler, getUserSessionsHandler } from "../controller/session.controller";
import { createSessionSchema } from "../schema/session.schema";

export default function userRoutes(app: Express){

    //Health Check Route
    app.get("/healthCheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })
    
    //Create User Route
    app.post("/api/users", validate(createUserSchema), createUserHandler);

    //Create Session Route
    app.post("/api/sessions", validate(createSessionSchema), createUserSessionHandler)

    app.get("/api/sessions", getUserSessionsHandler)

}