import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { FileModule } from '@pyrd/ubs2022-socletechnique-lib';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    FileModule
  ]
})
export class ProductModule {}
