import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ROLES } from 'src/models/models';
import { IRoles } from './roles.interface';
import { RolesDTO } from './dto/roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(ROLES.name) private readonly model: Model<IRoles>,
  ) {}
  insertar(rolesDTO: RolesDTO): Promise<IRoles> {
    const nuevoRol = new this.model(rolesDTO);
    return nuevoRol.save();
  }
  todos(): Promise<IRoles[]> {
    return this.model.find().populate('passengers');
  }
  uno(id: string): Promise<IRoles> {
    return this.model.findById(id).populate('passengers');
  }
  actualizar(id: string, rolesDTO: RolesDTO): Promise<IRoles> {
    return this.model.findByIdAndUpdate(id, rolesDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Usuario eliminado' };
  }
  async insertarPasajero(
    rolId: string,
    passengerId: string,
  ): Promise<IRoles> {
    return await this.model
      .findByIdAndUpdate(
        rolId,
        { $addToSet: { passengers: passengerId } },
        { new: true },
      )
      .populate('passengers');
  }
}
