import mongoose, { Schema, model } from "mongoose";
import { UserDocument } from "./user.model";

export type SchemaDocument = {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
};

const sessionSchema = new Schema<SchemaDocument>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = model<SchemaDocument>("Session", sessionSchema);

export default SessionModel;
