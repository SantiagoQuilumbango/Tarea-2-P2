import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DEPARTAMENTO } from 'src/models/models'; // Cambio de USER a DEPARTAMENTO
import { IDepartamento } from './departamento.interface'; // Cambio de IUser a IDepartamento
import * as bcrypt from 'bcrypt';
import { DepartamentoDTO } from './dto/departamento.dto'; // Cambio de UserDTO a DepartamentoDTO

@Injectable()
export class DepartamentosService { // Cambio de UsersService a DepartamentosService
  constructor(@InjectModel(DEPARTAMENTO.name) private readonly modelo: Model<IDepartamento>) {} // Cambio de USER.name a DEPARTAMENTO.name, cambio de IUser a IDepartamento

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async insertar(departamentoDTO: DepartamentoDTO): Promise<IDepartamento> { // Cambio de userDTO a departamentoDTO
    const hash = await this.hashPassword(departamentoDTO.password); // Cambio de userDTO.password a departamentoDTO.password
    const newDepartamento = new this.modelo({ ...departamentoDTO, password: hash }); // Cambio de User a departamentoDTO
    return await newDepartamento.save();
  }

  async todos(): Promise<IDepartamento[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<IDepartamento> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, departamentoDTO: DepartamentoDTO): Promise<IDepartamento> { // Cambio de userDTO a departamentoDTO
    const hash = await this.hashPassword(departamentoDTO.password); // Cambio de userDTO.password a departamentoDTO.password
    const departamento = { ...departamentoDTO, password: hash }; // Cambio de User a departamentoDTO
    return await this.modelo.findByIdAndUpdate(id, departamento, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Departamento eliminado' }; // Cambio de 'Usuario eliminado' a 'Departamento eliminado'
  }
}
