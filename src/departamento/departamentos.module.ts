import { Module } from '@nestjs/common';
import { DepartamentosController } from './departamentos.controller'; // Cambio de UsersController a DepartamentosController
import { DepartamentosService } from './departamentos.service'; // Cambio de UsersService a DepartamentosService
import { MongooseModule } from '@nestjs/mongoose';
import { DEPARTAMENTO } from 'src/models/models'; // Cambio de USER a DEPARTAMENTO
import { DepartamentoSchema } from './schema/departamento.schema'; // Cambio de UserSchema a DepartamentoSchema

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: DEPARTAMENTO.name, // Cambio de USER.name a DEPARTAMENTO.name
        useFactory: () => {
          return DepartamentoSchema; // Cambio de UserSchema a DepartamentoSchema
        },
      },
    ]),
  ],
  controllers: [DepartamentosController], // Cambio de UsersController a DepartamentosController
  providers: [DepartamentosService], // Cambio de UsersService a DepartamentosService
})
export class DepartamentosModule {} // Cambio de UsersModule a DepartamentosModule
