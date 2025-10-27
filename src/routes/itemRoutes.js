import express from "express";
import Item from "../models/item.js";

const router = express.Router();

// Leer todos
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Crear
router.post("/", async (req, res) => {
  const nuevo = new Item(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// Eliminar
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Eliminado correctamente" });
});

export default router;
