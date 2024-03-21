import mongoose from 'mongoose';

export const EmpleadoSchema = new mongoose.Schema({
  ID_empleado: { type: String, required: true },
  Nombre: { type: String, required: true },
  Cargo: { type: String, required: true },
  Salario: { type: String, required: true },
  Fecha_contratacion: { type: String, required: true },
});

EmpleadoSchema.index({ ID_empleado: 1 }, { unique: true });
