import express from "express";
import Image from "../models/image.js";

const router = express.Router();

// Leer todos
router.get("/", async (req, res) => {
  const images = await Image.find();
  res.json(images);
});

// Crear
router.post("/", async (req, res) => {
  const nuevo = new Image(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// actualizar
router.put("/:id", async (req, res) => {
  const actualizado = await Image.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ 
    mensaje: "Actualizado correctamente", 
    data: actualizado 
  });
});

// Eliminar
router.delete("/:id", async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Eliminado correctamente" });
});

export default router;
