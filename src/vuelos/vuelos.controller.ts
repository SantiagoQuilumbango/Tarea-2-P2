import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { PassengerService } from 'src/passenger/passenger.service';
import { VuelosDTO } from './dto/vuelos.dto';

@Controller('vuelos')
export class VuelosController {
  constructor(
    private readonly vuelosService: VuelosService,
    private readonly passengerService: PassengerService,
  ) {}
  @Post()
  insertar(@Body() vuelosDTO: VuelosDTO) {
    return this.vuelosService.insertar(vuelosDTO);
  }
  @Get()
  todos() {
    return this.vuelosService.todos();
  }
  @Get(':id')
  uno(@Param('id') id: string) {
    return this.vuelosService.uno(id);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() vuelosDTO: VuelosDTO) {
    return this.vuelosService.actualizar(id, vuelosDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.vuelosService.eliminar(id);
  }
  @Post(':vueloId/passenger/:passengerId')
  async agregarPasajero(
    @Param('vueloId') vueloId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const pasajero = await this.passengerService.uno(passengerId);
    if (!pasajero) throw new Error('Pasajero no encontrado');
    return this.vuelosService.insertarPasajero(vueloId, passengerId);
  }
}
