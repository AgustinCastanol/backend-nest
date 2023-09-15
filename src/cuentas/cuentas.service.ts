import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,
  ) {}
  findAll(skip: number, take: number) {
    return this.cuentaRepository.find({
      skip,
      take,
      relations: ['fiscal', 'fiscal.contacto'],
    });
  }

  findOne(id: string) {
    return this.cuentaRepository.findOne({
      where: { Recid: id },
      relations: ['fiscal', 'fiscal.contacto'],
    });
  }
}
