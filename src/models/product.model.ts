import mongoose, { Schema, model } from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10)

export type ProductDocument = {
    productId: string
    user: UserDocument["_id"];
    title: string
    description: string
    price: number
    image: string
    createdAt: Date
    updatedAt: Date
};

const productSchema = new Schema<ProductDocument>(
  {
    productId: {
        type: String,
        required: true,
        unique: true,
        default: () => `product_${nanoid()}`
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

const ProductModel = model<ProductDocument>("Session", productSchema);

export default ProductModel;
