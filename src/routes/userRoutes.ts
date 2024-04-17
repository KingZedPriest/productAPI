import { Express, Request, Response } from "express";
import { createUserHandler } from "../controller/user.controller";


export default function userRoutes(app: Express){

    //Health Check Route
    app.get("/healthCheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })
    //Create User Routes
    app.post("/api/users", createUserHandler);
    
}