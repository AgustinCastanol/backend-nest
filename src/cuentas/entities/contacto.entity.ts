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
  Sector: string;

  @Column()
  Aniversario: Date;

  @Column()
  FechaNacimiento: Date;

  @Column()
  EstadoCivil: string;

  @Column()
  Bloqueado: number;

  @Column()
  Apellido: string;

  @Column()
  Saludo: string;

  @Column()
  Titulo: string;

  @Column()
  Genero: number;

  @Column()
  Eliminado: number;

  @Column()
  IDDireccionlaboral: string;

  @Column()
  Religion: string;

  @Column({ length: 50 })
  customID: string;

  @Column()
  Identificador: number;

  @Column()
  IDcontactoDependencia: string;

  @Column()
  HijosPequenios: number;

  @Column()
  HijosAdolecentes: number;

  @Column()
  HijosAdultos: number;

  @Column()
  IDUsuarioCreacion: string;

  @Column()
  IDUsuarioModificacion: string;
}
