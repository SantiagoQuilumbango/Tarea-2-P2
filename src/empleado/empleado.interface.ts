import { Document } from 'mongoose';

export interface IEmpleado extends Document {
  ID_empleado: string;
  Nombre: string;
  Cargo: string;
  Salario: string;
  Fecha_contratacion: string;
}
