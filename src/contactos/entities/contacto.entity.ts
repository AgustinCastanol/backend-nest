import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { Fiscal } from 'src/fiscales/entities/fiscale.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Empresa } from './empresa.entity';
import { Direccion } from './direccion.entity';

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

  @OneToMany(() => Fiscal, (fiscal) => fiscal.contacto, { eager: true })
  @JoinColumn({ name: 'IDEmpresa', referencedColumnName: 'IDRef' })
  fiscal: Fiscal;

  @OneToOne(() => Empresa)
  @JoinColumn({ name: 'IDEmpresa', referencedColumnName: 'IDEmpresa' })
  empresa: Empresa;

  @OneToOne(() => Direccion)
  @JoinColumn({ name: 'IDDireccionlaboral', referencedColumnName: 'RecID' })
  direccion: Direccion;
}
