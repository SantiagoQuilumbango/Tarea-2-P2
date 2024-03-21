import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoDTO } from './dto/empleado.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('empleado')
@Controller('api/v1/empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Post()
  insertar(@Body() empleadoDTO: EmpleadoDTO) {
    return this.empleadoService.insertar(empleadoDTO);
  }

  @Get()
  todos() {
    return this.empleadoService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.empleadoService.uno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() empleadoDTO: EmpleadoDTO) {
    return this.empleadoService.actualizar(id, empleadoDTO);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.empleadoService.eliminar(id);
  }
}
