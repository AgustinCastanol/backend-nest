import { Module } from '@nestjs/common';
import { ContactosService } from './contactos.service';
import { ContactosController } from './contactos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contactos } from './entities/contacto.entity';
import { ContactosSinFiscal } from './entities/contactosSinFiscal.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Contactos, ContactosSinFiscal])],
  controllers: [ContactosController],
  providers: [ContactosService],
})
export class ContactosModule {}
