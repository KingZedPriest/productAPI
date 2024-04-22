import { Express, Request, Response } from "express";
import { createUserHandler } from "../controller/user.controller";
import validate from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";

export default function userRoutes(app: Express){

    //Health Check Route
    app.get("/healthCheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })
    
    //Create User Routes
    app.post("/api/users", validate(createUserSchema), createUserHandler);

}