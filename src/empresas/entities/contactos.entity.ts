import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Empresa } from './empresa.entity';

@Entity('contactos')
export class Contactos {
  @PrimaryGeneratedColumn()
  RecID: number;

  @Column()
  IDContacto: string;

  @Column()
  IDEmpresa: string;

  @Column()
  FechaModificacion: Date;

  @Column()
  FechaCreacion: Date;

  @Column()
  Nombre: string;

  @Column()
  Cargo: string;

  @Column()
  Apellido: string;

  @Column()
  Genero: number;

  @Column()
  IDDireccionlaboral: string;

  @Column()
  IDcontactoDependencia: string;

  @OneToOne(() => Empresa)
  @JoinColumn({ name: 'IDEmpresa', referencedColumnName: 'IDEmpresa' })
  empresa: Empresa;
}
