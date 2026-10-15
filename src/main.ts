import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Включаем CORS для Apollo Sandbox
  app.enableCors();
  
  await app.listen(4000);
  console.log(`Application is running on: http://localhost:4000/graphql`);
}

bootstrap();