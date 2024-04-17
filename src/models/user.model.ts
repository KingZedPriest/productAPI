import { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


//Type is recommended instead of Interface
export type UserDocument = {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>
};

//Schema Definition
const userSchema = new Schema <UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next: () => any) {

   if(!this.isModified("password")){
    return next()
   }

   const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))
   const newHashedPassword = await bcrypt.hashSync(this.password, salt)

   this.password = newHashedPassword;

   return next();

})

userSchema.methods.comparePassword = async function (candidatePassword:string): Promise<boolean> {

    return bcrypt.compare(candidatePassword, this.password).catch((e) => false)
}

//Model
const UserModel = new Model("User", userSchema)

export default UserModel;