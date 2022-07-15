import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Garante que as inf. indesejadas seja retirado do obj
    // forbidNonWhitelisted: true, // Se tiver informacao nao listada, da forbitten
    transform: true, // vai tipar os objs com o DTO
  }))
  await app.listen(3000);
}
bootstrap();
