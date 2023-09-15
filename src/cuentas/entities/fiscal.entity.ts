import { Contactos } from './contacto.entity';
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
  ModalidadCliente!: number;

  @Column()
  ImporteLimiteCreditoCliente!: number;

  @Column()
  NroMonedaCliente!: number;

  @Column()
  ModalidadProveedor!: number;

  @Column()
  ImporteLimiteCreditoProveedor!: number;

  @Column()
  NroMonedaProveedor!: number;

  @Column()
  NroImpuesto1!: string;

  @Column()
  NroImpuesto2!: string;

  @Column()
  NroImpuesto3!: string;

  @Column()
  NroCliente!: string;

  @Column()
  NroProveedor!: string;

  @Column()
  NroSocio!: string;

  @Column()
  Aret1!: number;

  @Column()
  Aret2!: number;

  @Column()
  Aret3!: number;

  @Column()
  Defecto!: number;

  @Column()
  IDCuentaContableCliente!: string;

  @Column()
  IDCuentaContableProveedor!: string;

  @Column()
  NroClientePropio!: string;

  @Column()
  Impuesto1Tipo!: number;

  @Column()
  IDDireccion!: string;

  @Column()
  Origen!: number;

  @Column({ type: 'datetime', nullable: true })
  FechaComprobacionCliente!: Date | null;

  @Column({ type: 'datetime', nullable: true })
  FechaComprobacionProveedor!: Date | null;

  @Column()
  IDCorreo!: string;

  @Column({ type: 'datetime', nullable: true })
  FechaComprobacion!: Date | null;

  @Column({ type: 'mediumtext' })
  Auditoria!: string;

  @Column()
  Bloqueado!: number;

  @Column()
  PeriodicidadProveedor!: number;

  @Column({ type: 'mediumtext' })
  CadenaIDUsuarios!: string;

  @Column()
  IDTelefono!: string;

  @Column()
  Impuesto2Tipo!: number;

  @Column()
  IDContacto!: string;

  @Column()
  NroImpuesto4!: string;

  @Column()
  SecretoProfesional!: number;

  @Column()
  CodBancario!: string;

  @Column()
  Alias!: string;

  @Column()
  Banco!: string;

  @OneToOne(() => Contactos)
  @JoinColumn({ name: 'IDRef', referencedColumnName: 'IDEmpresa' })
  contacto!: Contactos;
}
