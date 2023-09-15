import { Contactos } from 'src/contactos/entities/contacto.entity';
import { Empresa } from 'src/contactos/entities/empresa.entity';
import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';

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

  @OneToOne(() => Contactos)
  @JoinColumn({ name: 'IDRef', referencedColumnName: 'IDEmpresa' })
  contacto!: Contactos;

  @OneToOne(() => Empresa)
  @JoinColumn({ name: 'IDRef', referencedColumnName: 'IDEmpresa' })
  empresa!: Empresa;
}
