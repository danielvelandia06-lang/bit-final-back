import { Schema, model } from "mongoose";

const tareaSchema = new Schema(
  {
    titulo: {
      type: String,
    },
    prioridad: {
      type: String,
    },
    completada: {
      type: Boolean,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Tarea", tareaSchema);
