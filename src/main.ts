import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '30mb' }));
  app.enableCors();

  // const appConfig: ConfigService = app.get('ConfigService');
  const PORT = process.env.PORT;
  console.log('PORT', process.env.PORT);
  await app.listen(PORT, () => {
    Logger.log(`App is running at ${PORT}`);
  });
}
bootstrap();
