import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesDTO } from './dto/roles.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('roles')
@Controller('api/v1/roles')
export class RolesController {
  constructor(
    private readonly rolesService: RolesService,
    private readonly passengerService: PassengerService,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Crea Roles' })
  insertar(@Body() rolesDTO: RolesDTO) {
    return this.rolesService.insertar(rolesDTO);
  }
  @Get()
  @ApiOperation({ summary: 'Selecciona todos los Roles' })
  todos() {
    return this.rolesService.todos();
  }
  @Get(':id')
  uno(@Param('id') id: string) {
    return this.rolesService.uno(id);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() rolesDTO: RolesDTO) {
    return this.rolesService.actualizar(id, rolesDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.rolesService.eliminar(id);
  }
  @Post(':rolId/passenger/:passengerId')
  async agregarPasajero(
    @Param('rolId') rolId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const pasajero = await this.passengerService.uno(passengerId);
    if (!pasajero)
      throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
    return this.rolesService.insertarPasajero(rolId, passengerId);
  }
}
