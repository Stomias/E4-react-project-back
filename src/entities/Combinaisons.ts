import { Column, Entity, Index } from 'typeorm';

@Index('FK2_Combinaison', ['idExercice'], {})
@Entity('combinaisons', { schema: 'dbsport' })
export class Combinaisons {
  @Column('smallint', { primary: true, name: 'IdEntrainement', unsigned: true })
  idEntrainement: number;

  @Column('smallint', { primary: true, name: 'IdExercice', unsigned: true })
  idExercice: number;

  @Column('int', { name: 'Temps' })
  temps: number;

  @Column('int', { name: 'Numero_Exercice' })
  numero_exercice: number;
}
