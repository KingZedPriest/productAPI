import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { ProductDocument } from "../models/product.model";
import { ProductInput } from "../types/default";

//Create a product
export async function createProduct(input: ProductInput){
    return ProductModel.create(input)
} 

//Find a product
export async function findProduct(query: FilterQuery<ProductDocument>, options: QueryOptions = {lean: true}){
    return ProductModel.findOne(query, {}, options)
}

//Update a product
export async function findAndUpdateProduct(query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options:QueryOptions){
    return ProductModel.findOneAndUpdate(query, update, options)
}

//Delete a product
export async function deleteProduct(query: FilterQuery<ProductDocument>){
    return ProductModel.deleteOne(query)
}