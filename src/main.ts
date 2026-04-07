import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000); // operador ?? significa que si no esta el primero (variable de entorno), utiliza el segundo (3000)
  console.log("Estamos en el ambiente ${process.env.NODE_ENV}")
}
bootstrap();
