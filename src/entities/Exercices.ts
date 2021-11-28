import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exercices', { schema: 'dbsport' })
export class Exercices {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'IdExercice',
    unsigned: true,
  })
  idExercice: number;

  @Column('varchar', { name: 'Libelle_Exercice', length: 255 })
  libelleExercice: string;

  @Column('varchar', { name: 'Famille_Exercice', length: 255 })
  familleExercice: string;

  @Column('tinyint', { name: 'Difficulte' })
  difficulte: number;

  @Column('varchar', { name: 'Charge', length: 1 })
  charge: string;
}
