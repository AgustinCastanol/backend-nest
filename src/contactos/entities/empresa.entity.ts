import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Contactos } from './contacto.entity';

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

  @OneToMany(() => Contactos, (contacto) => contacto.empresa)
  @JoinColumn({ name: 'RecID', referencedColumnName: 'IDEmpresa' })
  contactos: Contactos;
}
