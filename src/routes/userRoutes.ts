import { Express, Request, Response } from "express";


export default function userRoutes(app: Express){
    //Health Check Route
    app.get("/healthCheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })
}