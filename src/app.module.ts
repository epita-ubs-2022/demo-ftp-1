import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  FileModule,
  SocleTechniqueModule,
} from '@pyrd/ubs2022-socletechnique-lib';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    SocleTechniqueModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
