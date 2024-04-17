import { Express, Request, Response } from "express";


export default function routes(app: Express){
    //Health Check Route
    app.get("/healthcheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })
}