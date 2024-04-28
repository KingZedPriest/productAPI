import { Express, Request, Response } from "express";

//Handlers
import { createUserHandler } from "../controller/user.controller";
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from "../controller/session.controller";

//Middlewares
import validate from "../middleware/validateResource";
import { createUserSchema } from "../schema/user.schema";
import { createSessionSchema } from "../schema/session.schema";
import requireUser from "../middleware/requireUser";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from "../schema/product.schema";
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from "../controller/product.controller";


export default function userRoutes(app: Express){

    //Health Check Route
    app.get("/healthCheck", (req: Request, res: Response) => {
        res.sendStatus(200)
    })
    
    //Create User Route
    app.post("/api/users", validate(createUserSchema), createUserHandler);

    //Create Session Route
    app.post("/api/sessions", validate(createSessionSchema), createUserSessionHandler)

    //Get Sessions Route
    app.get("/api/sessions", requireUser, getUserSessionsHandler)

    //Delete Sessions Route
    app.delete("/api/sessions", requireUser, deleteSessionHandler)

    //Create Product Route
    app.post("/api/products",[requireUser, validate(createProductSchema)], createProductHandler)

    //Fetch Product Route
    app.get("/api/products/:productId",validate(getProductSchema), getProductHandler)

    //Update Product Route
    app.put("/api/products/:productId",[requireUser, validate(updateProductSchema)], updateProductHandler)

    //Delete Product Route
    app.delete("/api/products/:productId",[requireUser, validate(deleteProductSchema)], deleteProductHandler)
    
}