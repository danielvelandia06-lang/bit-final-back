import tareamodel from "../models/tareas.js";

const tareasController = {
  crear: async (req, res) => {
    try {
      const { titulo, prioridad, completada } = req.body;
      const nuevaTarea = new tareamodel({ titulo, prioridad, completada });
      await nuevaTarea.save();
      res.status(201).json({ message: "Tarea creada exitosamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al crear la tarea" });
    }
  },
  obtenerTodas: async (req, res) => {
    try {
      const todastareas = await tareamodel.find();
      res.status(201).json({ data: todastareas });
    } catch (error) {
      res.status(500).json({ error: "Error al leer todas las tarea" });
    }
  },
  obtenerUna: async (req, res) => {
    try {
      const { id } = req.params;
      const tareaencontrada = await tareamodel.findById(id);
      if (!tareaencontrada) {
        res.status(404).json({ message: "Tarea no encontrada" });
      } else {
        res.status(201).json({ data: tareaencontrada });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al leer la tarea" });
    }
  },
  actualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, prioridad, completada } = req.body;
      const tareaactualizada = await tareamodel.findByIdAndUpdate(id, {
        titulo,
        prioridad,
        completada,
      });
      if (!tareaactualizada) {
        res.status(404).json({ message: "Tarea no actualizada" });
      } else {
        res.status(201).json({ data: tareaactualizada });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la tarea" });
    }
  },
  eliminar: async (req, res) => {
    try {
      const { id } = req.params;
      const tareaeliminada = await tareamodel.findByIdAndDelete(id);
      if (!tareaeliminada) {
        res.status(404).json({ message: "Tarea no encontrada" });
      } else {
        res
          .status(201)
          .json({
            message: "Tarea eliminada exitosamente",
            data: tareaeliminada,
          });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la tarea" });
    }
  },
};

export default tareasController;
