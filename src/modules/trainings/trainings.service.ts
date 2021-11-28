import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entrainements } from 'src/entities/Entrainements';
import { Combinaisons } from 'src/entities/Combinaisons';
import { Repository, getManager } from 'typeorm';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { Exercices } from 'src/entities/Exercices';

@Injectable()
export class EntrainementsService {
  constructor(
    @InjectRepository(Entrainements)
    private entrainementsRepository: Repository<Entrainements>,
    @InjectRepository(Combinaisons)
    private combinaisonsRepository: Repository<Combinaisons>,
    @InjectRepository(Exercices)
    private exercicesRepository: Repository<Exercices>,
  ) {}

  create(createTrainingDto: CreateTrainingDto) {
    // On créé d'abord l'entrainement
    const newEntrainement: Entrainements = this.entrainementsRepository.create({
      idUser: createTrainingDto.idUser,
      libelleEntrainement: createTrainingDto.libelleEntrainement,
      duree: 0,
    });
    // On créé ensuite les objets Combinaisons avec la liste d'exercice reçu
    const newCombinaisons: Combinaisons[] = createTrainingDto.exercices.map(
      (exercice) => {
        // On créé l'objet
        const combinaison = new Combinaisons();
        combinaison.idEntrainement = newEntrainement.idEntrainement;
        combinaison.idExercice = exercice.idExercice;
        combinaison.temps = exercice.temps;
        // On incrémente le temps à l'entrainement
        newEntrainement.duree += exercice.temps;
        // On renvoie l'objet
        return combinaison;
      },
    );

    // On sauvegarde en base de donnée
    this.entrainementsRepository.save(newEntrainement);
    this.combinaisonsRepository.save(newCombinaisons);
  }

  async findAllUserTraining(idUser) {
    // On récupère les entrainements
    const entrainements = await this.entrainementsRepository.find({
      where: { idUser },
    });

    return entrainements;
  }

  async findOneTraining(idTraining) {
    // On récupère les exercices d'un entrainement
    const query = await getManager().query(`
    SELECT Libelle_Exercice, Famille_Exercice, Difficulte, Charge, combinaisons.Temps, combinaisons.idExercice
    FROM combinaisons
    INNER JOIN exercices ON exercices.IdExercice = combinaisons.IdExercice
    WHERE 
      combinaisons.IdEntrainement = 
    ` + idTraining)

    // TODO récupère la liste des exercices (tb relation)

    
    return query;
    return '';
  }

  update(id: number, updateTrainingDto: UpdateTrainingDto) {
    return `This action updates a #${id} training`;
  }

  remove(id: number) {
    return `This action removes a #${id} training`;
  }
}
