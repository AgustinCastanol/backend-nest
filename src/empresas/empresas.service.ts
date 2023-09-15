import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Empresa } from './entities/empresa.entity';
@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}
  findAll(skip: number, take: number) {
    return this.empresaRepository.find({
      skip: skip,
      take: take,
      relations: ['fiscal', 'contactos'],
    });
  }

  findOne(id: number) {
    return this.empresaRepository.findOne({
      where: {
        RecID: id,
      },
      relations: ['fiscal', 'contactos'],
    });
  }
  findByDate(skip: number, take: number, start_date: string, end_date: string) {
    return this.empresaRepository.find({
      skip: skip,
      take: take,
      where: {
        FechaCreacion: Between(new Date(start_date), new Date(end_date)),
        FechaModificacion: Between(new Date(start_date), new Date(end_date)),
      },
      relations: ['fiscal', 'contactos'],
      order: {
        FechaCreacion: 'ASC',
      },
    });
  }
  findAllSoloEmpresas(skip: number, take: number) {
    return this.empresaRepository.find({
      skip: skip,
      take: take,
      relations: [],
    });
  }
}
