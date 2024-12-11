import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
