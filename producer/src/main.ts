import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const grpcUrl = process.env.GRPC_URL || 'localhost:5000';

  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'users',
      protoPath: join(__dirname, '../../proto/users.proto'),
      url: grpcUrl,
    },
  });

  await app.listen();
  console.log(`Producer microservice is listening on ${grpcUrl}`);
}
bootstrap();
