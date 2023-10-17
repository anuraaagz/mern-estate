import { MongoGridFSChunkError } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true } //to record time pf user creation and time of update of the user
);

const User = mongoose.model('User', userSchema); 

export default User;
