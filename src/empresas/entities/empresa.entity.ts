import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Fiscal } from './fiscal.entity';
import { Contactos } from './contactos.entity';

@Entity({ name: 'Empresas' })
export class Empresa {
  @PrimaryGeneratedColumn()
  RecID: number;

  @Column()
  IDEmpresa: string;

  @Column()
  Empresa: string;

  @Column()
  FechaCreacion: Date;

  @Column()
  FechaModificacion: Date;

  @Column()
  Calificacion: string;

  @Column()
  Auditoria: string;

  @OneToOne(() => Fiscal)
  @JoinColumn({ name: 'IDEmpresa', referencedColumnName: 'IDRef' })
  fiscal: Fiscal;

  @OneToMany(() => Contactos, (contactos) => contactos.empresa)
  @JoinColumn({ name: 'IDEmpresa', referencedColumnName: 'IDEmpresa' })
  contactos: Contactos[];
}
