import { UserDocument } from "../models/user.model";

export type UserInput = {
    email: string;
    name: string;
    password: string;
};

export type ProductInput = {
    productId?: string
    user: UserDocument["_id"];
    title: string
    description: string
    price: number
    image: string
};