import mongoose from 'mongoose';

export const DepartamentoSchema = new mongoose.Schema(
  {
    ID_departamento: { type: String, required: true },
    Nombre: { type: String, required: true },
    Ubicacion: { type: String, required: true },
    Presupuesto: { type: String, required: true },
    Jefe: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

DepartamentoSchema.index({ ID_departamento: 1 }, { unique: true });
DepartamentoSchema.index({ Nombre: 1 }, { unique: true });
