import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  categorias: { 
    type: [String],
    required: true,
    validate: {
      validator: (arr) => arr.length > 0, // al menos una categoría
      message: "Debe tener al menos una categoría"
    }
  },
  imagenUrl: { type: String },
  fechaCreacion: { type: Date, default: Date.now }
});

export default mongoose.model("Image", imageSchema);
