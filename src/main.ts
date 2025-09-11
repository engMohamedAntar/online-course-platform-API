//main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // For Stripe webhooks: the body must be raw
  app.use('/payment/webhook', bodyParser.raw({ type: 'application/json' }));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted:true,
      transform: true,
      transformOptions: { enableImplicitConversion: true},
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
