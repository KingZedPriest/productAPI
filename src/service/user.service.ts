import UserModel, { UserDocument } from "../models/user.model";
import logger from "../utils/logger";
import { UserInput } from "../types/default";
import { omit } from "lodash";
import { FilterQuery } from "mongoose";

//Create a User
export async function createUser(input: UserInput){

    try {
        const user = await UserModel.create(input);
        return (omit(user.toJSON(), ["password"]))

    } catch (error: any) {

        logger.fatal (`User service error cause of this ${error}`)
        throw new Error(error)

    }

}

//Authenticate a User
export async function validatePassword({email, password}: {email: string, password: string}){

    const user = await UserModel.findOne({email})

    if (!user) {
        return false
    };

    const isValid = await user.comparePassword(password)

    if(!isValid) return false;

    return (omit(user.toJSON(), ["password"]))
    
}

//Find a User
export async function findUser(query: FilterQuery<UserDocument>) {

    return UserModel.findOne(query).lean()
    
}