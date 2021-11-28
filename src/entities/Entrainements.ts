import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('FK_Entrainement', ['idUser'], {})
@Entity('entrainements', { schema: 'dbsport' })
export class Entrainements {
  @PrimaryGeneratedColumn({
    type: 'smallint',
    name: 'IdEntrainement',
    unsigned: true,
  })
  idEntrainement: number;

  @Column('smallint', { name: 'IdUser', unsigned: true })
  idUser: number;

  @Column('varchar', { name: 'Libelle_Entrainement', length: 255 })
  libelleEntrainement: string;

  @Column('int', { name: 'Duree' })
  duree: number;
}
