import { Module } from '@nestjs/common';
import { FiscalesService } from './fiscales.service';
import { FiscalesController } from './fiscales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fiscal } from './entities/fiscale.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Fiscal])],
  controllers: [FiscalesController],
  providers: [FiscalesService],
})
export class FiscalesModule {}
