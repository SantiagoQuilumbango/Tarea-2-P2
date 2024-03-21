import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ROLES } from 'src/models/models';
import { RolesSchema } from './schema/roles.schema';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ROLES.name,
        useFactory: () => RolesSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    PassengerModule,
  ],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
