import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fiscal } from './entities/fiscale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FiscalesService {
  constructor(
    @InjectRepository(Fiscal) private fiscalesRepository: Repository<Fiscal>,
  ) {}
  findAll(skip: number, take: number) {
    return this.fiscalesRepository.find({
      skip,
      take,
      relations: ['contacto', 'empresa'],
    });
  }

  findOne(id: string) {
    return this.fiscalesRepository.findOne({
      where: { RecID: id },
      relations: ['contacto', 'empresa'],
    });
  }
  findAllSoloFiscales(skip: number, take: number) {
    return this.fiscalesRepository.find({
      skip,
      take,
      relations: [],
    });
  }
}
