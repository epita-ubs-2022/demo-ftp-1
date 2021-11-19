import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  FileModule,
  SocleTechniqueModule,
} from '@pyrd/ubs2022-socletechnique-lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    SocleTechniqueModule,
    FileModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
