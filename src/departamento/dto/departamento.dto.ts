import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DepartamentoDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'El texto es requerido' })
  @IsString()
  readonly ID_departamento: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El texto es requerido' })
  @IsString()
  readonly Nombre: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El texto es requerido' })
  @IsString()
  readonly Ubicacion: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El texto es requerido' })
  @IsString()
  readonly Presupuesto: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El texto es requerido' })
  @IsString()
  readonly Jefe: string;
}
