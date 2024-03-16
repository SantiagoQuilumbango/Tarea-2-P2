import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class VuelosDTO {
  @IsNotEmpty()
  @IsString()
  readonly piloto: string;
  @IsNotEmpty()
  @IsString()
  readonly avion: string;
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fecha;
  @IsNotEmpty()
  @IsString()
  readonly destino: string;
}
