import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EMPLEADO } from 'src/models/models'; // Utiliza la constante que define el nombre de la tabla
import { IEmpleado } from './empleado.interface'; // Importa la interfaz actualizada
import { Model } from 'mongoose';
import { EmpleadoDTO } from './dto/empleado.dto'; // Importa el DTO actualizado

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectModel(EMPLEADO.name) private readonly model: Model<IEmpleado>, // Utiliza el nombre de la tabla proporcionado
  ) {}

  async insertar(empleadoDTO: EmpleadoDTO): Promise<IEmpleado> {
    const newEmpleado = new this.model(empleadoDTO);
    return await newEmpleado.save();
  }

  async todos(): Promise<IEmpleado[]> {
    return await this.model.find();
  }

  async uno(id: string): Promise<IEmpleado> {
    return await this.model.findById(id);
  }

  async actualizar(id: string, empleadoDTO: EmpleadoDTO): Promise<IEmpleado> {
    return await this.model.findByIdAndUpdate(id, empleadoDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}
