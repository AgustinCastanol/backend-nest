import { Entity, PrimaryColumn, Column, JoinColumn, OneToMany } from 'typeorm';
import { Empresa } from './empresa.entity';

@Entity({ name: 'fiscal' })
export class Fiscal {
  @PrimaryColumn()
  RecID!: string;

  @Column()
  RazonSocial!: string;

  @Column()
  IDRef!: string;

  @Column()
  NroImpuesto1!: string;

  @Column()
  Defecto!: number;

  @Column()
  IDDireccion!: string;

  @Column()
  IDCorreo!: string;

  @Column()
  IDTelefono!: string;

  @Column()
  IDContacto!: string;

  @OneToMany(() => Empresa, (empresa) => empresa.fiscal)
  @JoinColumn({ name: 'IDRef', referencedColumnName: 'RecID' })
  empresa!: Empresa;
}
