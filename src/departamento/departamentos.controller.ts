import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { DepartamentoDTO } from './dto/departamento.dto'; // Cambio de UserDTO a DepartamentoDTO
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Departamentos') // Cambio de 'Users' a 'Departamentos'
@Controller('api/v2/departamentos') // Cambio de 'api/v2/users' a 'api/v2/departamentos'
export class DepartamentosController { // Cambio de UsersController a DepartamentosController
  constructor(private departamentoService: DepartamentosService) {} // Cambio de userService a departamentoService

  @Post()
  insertar(@Body() departamentoDTO: DepartamentoDTO) { // Cambio de userDTO a departamentoDTO
    return this.departamentoService.insertar(departamentoDTO); // Cambio de insertar a insertar
  }
  @Get()
  todos() {
    return this.departamentoService.todos(); // Cambio de todos a todos
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.departamentoService.uno(id); // Cambio de uno a uno
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() departamentoDTO: DepartamentoDTO) { // Cambio de userDTO a departamentoDTO
    return this.departamentoService.actualizar(id, departamentoDTO); // Cambio de actualizar a actualizar
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.departamentoService.eliminar(id); // Cambio de eliminar a eliminar
  }
}
