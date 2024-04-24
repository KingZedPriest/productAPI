import mongoose, { Schema, model } from "mongoose";
import { UserDocument } from "./user.model";

export type SessionDocument = {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
};

const sessionSchema = new Schema<SessionDocument>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = model<SessionDocument>("Session", sessionSchema);

export default SessionModel;
