import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'users',
          protoPath: join(__dirname, '../../../proto/users.proto'),
          url: process.env.PRODUCER_URL || 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
