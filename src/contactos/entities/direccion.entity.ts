import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'direcciones' })
export class Direccion {
  @PrimaryGeneratedColumn()
  RecID: number;

  @Column()
  IDRef: string;

  @Column()
  Descripcion: string;

  @Column()
  Calle: string;

  @Column()
  Numero: string;

  @Column()
  Piso: string;

  @Column()
  Dto: string;

  @Column()
  Torre: string;

  @Column()
  CP: string;

  @Column()
  Ciudad: string;

  @Column()
  Provincia: string;

  @Column()
  Pais: string;

  @Column()
  CodPais: string;

  @Column()
  CodCiudad: string;

  @Column()
  Localidad: string;

  @Column()
  Barrio: string;

  @Column()
  Defecto: number;

  @Column()
  CustomID: string;

  @Column()
  CodJurisdiccion: string;
}
