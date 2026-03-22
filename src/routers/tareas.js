import { Router } from "express";
import tareasController from "../controllers/tareas.js";

const tareasrouter = Router();

tareasrouter.post("/", tareasController.crear);
tareasrouter.get("/", tareasController.obtenerTodas);
tareasrouter.get("/:id", tareasController.obtenerUna);
tareasrouter.put("/:id", tareasController.actualizar);
tareasrouter.delete("/:id", tareasController.eliminar);

export default tareasrouter;
