import mongoose from 'mongoose';
export const RolesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
