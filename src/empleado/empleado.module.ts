import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EMPLEADO } from 'src/models/models'; // Asumiendo que "EMPLEADO" es la constante que define el nombre de la tabla
import { EmpleadoSchema } from './schema/empleado.schema'; // Importa el schema actualizado

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: EMPLEADO.name, // Utiliza el nombre de la tabla proporcionado
        useFactory: () => EmpleadoSchema, // Utiliza el schema actualizado
      },
    ]),
  ],
  controllers: [EmpleadoController], // Utiliza el controlador actualizado
  providers: [EmpleadoService], // Utiliza el servicio actualizado
  exports: [EmpleadoService], // Exporta el servicio actualizado si es necesario
})
export class EmpleadoModule {}
