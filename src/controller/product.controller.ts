import { Request, Response } from "express";
import { CreateProductInput, DeleteProductInput, ReadProductInput, UpdateProductInput } from "../schema/product.schema";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../service/product.service";
import logger from "../utils/logger";

//Create a product
export async function CreateProductHandler(req: Request<{}, {}, CreateProductInput["body"]>, res: Response){

    try {

       const userId = res.locals.user._id
        const body = req.body
        const product = await createProduct({...body, user: userId})
        return res.send(product) 

    } catch (error: any) {
        logger.error(error)
        return res.status(500).send(error.message)
    }
    
}

//Update a Product
export async function updateProductHandler(req: Request<UpdateProductInput["params"]>, res: Response){

    try {
        
        const userId = res.locals.user._id
        const productId = req.params.productId
        const update = req.body
        const product = await findProduct({productId})
        if (!product){
            return res.status(404).send("Product not found")
        }
        if (product.user !== userId){
            return res.status(403).send("User not authorized for this update.")
        }
        const updatedProduct = await findAndUpdateProduct({productId}, update, {new: true})
        return res.send(updatedProduct)

    } catch (error : any) {
        logger.error(error)
        return res.status(500).send(error.message)
    }
}

//Fetch a product
export async function getProductHandler(req: Request<ReadProductInput["params"]>, res: Response){
    try {

        const productId = req.params.productId;
        const product = await findProduct({productId}) 
        if (!product){
            return res.status(404).send("Product not found")
        }
        return res.send(product)

    } catch (error : any) {
        logger.error(error)
        return res.status(500).send(error.message) 
    }
}

//Delete a product
export async function deleteProductHandler(req: Request<DeleteProductInput["params"]>, res: Response){

    try {

        const userId = res.locals.user._id
        const productId = req.params.productId
        const product = await findProduct({productId})
        if (!product){
            return res.status(404).send("Product not found")
        }
        if (product.user !== userId){
            return res.status(403).send("User not authorized for this.")
        }
        await deleteProduct({productId})
        return res.status(200).send("Product was deleted successfully.")
        
    } catch (error : any) {
        logger.error(error)
        return res.status(500).send(error.message)
    }

}