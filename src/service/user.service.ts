import UserModel, { UserDocument } from "../models/user.model";
import logger from "../utils/logger";
import { UserInput } from "../types/default";


export async function createUser(input: UserInput){
    try {
        return await UserModel.create(input);
    } catch (error: any) {
        logger.fatal (`User service error cause of this ${error}`)
        throw new Error(error)
    }
}
