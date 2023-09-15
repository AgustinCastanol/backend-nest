import { Injectable } from '@nestjs/common';
// import { CreateContactoDto } from './dto/create-contacto.dto';
// import { UpdateContactoDto } from './dto/update-contacto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contactos } from './entities/contacto.entity';
import { Repository, Between } from 'typeorm';
@Injectable()
export class ContactosService {
  constructor(
    @InjectRepository(Contactos)
    private contactosRepository: Repository<Contactos>,
  ) {}

  findAll(skip: number, take: number) {
    return this.contactosRepository.find({
      skip,
      take,
      relations: ['fiscal', 'empresa', 'direccion'],
    });
  }

  findOne(id: number) {
    return this.contactosRepository.findOne({
      where: { RecID: id },
      relations: ['fiscal', 'empresa', 'direccion'],
    });
  }
  findByIDEmpresa(id: string) {
    return this.contactosRepository.find({
      where: { IDEmpresa: id },
      relations: ['fiscal', 'empresa', 'direccion'],
    });
  }
  findByDate(skip: number, take: number, start_date: string, end_date: string) {
    return this.contactosRepository.find({
      skip,
      take,
      where: {
        FechaCreacion: Between(new Date(start_date), new Date(end_date)),
        FechaModificacion: Between(new Date(start_date), new Date(end_date)),
      },
      relations: ['fiscal', 'empresa', 'direccion'],
      order: {
        FechaCreacion: 'ASC',
      },
    });
  }
  findByDateSoloCuentas(
    skip: number,
    take: number,
    start_date: string,
    end_date: string,
  ) {
    return this.contactosRepository.find({
      skip,
      take,
      where: {
        FechaCreacion: Between(new Date(start_date), new Date(end_date)),
        FechaModificacion: Between(new Date(start_date), new Date(end_date)),
      },
      select: ['RecID', 'Nombre', 'FechaCreacion', 'FechaModificacion'],
      relations: [],
      order: {
        FechaCreacion: 'ASC',
      },
    });
  }
}
