import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: Number,
});

export default mongoose.model("Item", itemSchema);
