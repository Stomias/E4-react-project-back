import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users', { schema: 'dbsport' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'IdUser', unsigned: true })
  idUser: number;

  @Column('varchar', { name: 'Identifiant', length: 20 })
  identifiant: string;

  @Column('varchar', { name: 'MotDePasse', length: 50 })
  motDePasse: string;

  @Column('varchar', { name: 'Nom', length: 100 })
  nom: string;

  @Column('varchar', { name: 'Prenom', length: 100 })
  prenom: string;

  @Column('int', { name: 'Age', nullable: true })
  age: number | null;

  @Column('int', { name: 'Taille', nullable: true })
  taille: number | null;

  @Column('varchar', { name: 'Sexe', nullable: true, length: 5 })
  sexe: string | null;

  @Column('decimal', { name: 'Poids', nullable: true, precision: 6, scale: 3 })
  poids: string | null;
}
