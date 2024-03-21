import { Document } from 'mongoose';

export interface IDepartamento extends Document {
  ID_departamento: string;
  Nombre: string;
  Ubicacion: string;
  Presupuesto: string;
  Jefe: string;
}
