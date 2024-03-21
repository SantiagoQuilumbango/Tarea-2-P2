import { IPassenger } from 'src/passenger/passenger.interface';

export interface IRoles extends Document {
  name: string;
  email: string;
  password: string;
  username: string;
  passengers: IPassenger[];
}
