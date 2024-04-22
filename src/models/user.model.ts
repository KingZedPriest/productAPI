import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


export type UserDocument = Document & {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
};


const userSchema = new Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//Hooks
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
    const newHashedPassword = await bcrypt.hashSync(this.password, salt);

    this.password = newHashedPassword;

    return next();
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password).catch(() => false);
};

const UserModel = model<UserDocument>("User", userSchema);

export default UserModel;
