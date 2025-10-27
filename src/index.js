import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/items", itemRoutes);

// Conexión a MongoDB (se usará la variable de entorno MONGO_URI)
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/crud_db")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error de conexión:", err));

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
