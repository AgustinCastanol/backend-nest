import { Contactos } from 'src/contactos/entities/contacto.entity';
import { Fiscal } from './fiscal.entity';
import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('cuentas')
export class Cuenta {
  @PrimaryColumn()
  Recid!: string;

  @Column()
  Nombre!: string;

  @Column()
  Tipo!: number;

  @Column()
  NroMoneda!: number;

  @Column()
  ImporteDescubierto!: number;

  @Column()
  Numero!: number;

  @Column({ type: 'mediumtext' })
  CadenaIDUsuarios!: string;

  @Column({ type: 'datetime', nullable: true })
  FechaCreacion!: Date | null;

  @Column({ type: 'datetime', nullable: true })
  FechaModificacion!: Date | null;

  @Column()
  LimitarImporteDescubierto!: number;

  @Column({ generated: 'increment' })
  ID!: number;

  @Column()
  Bloqueado!: number;

  @Column()
  IDFiscal!: string;

  @Column()
  Banco!: string;

  @Column()
  Direccion!: string;

  @Column()
  CodBancario!: string;

  @Column()
  Alias!: string;

  @OneToOne(() => Fiscal, { eager: true })
  @JoinColumn({ name: 'IDFiscal', referencedColumnName: 'RecID' })
  fiscal!: Fiscal;
}
