import { ExerciceTrainingDto } from './exercice-training.dto';

export class GetTrainingDto {
  libelle: string;
  duree: number;
  exercices: ExerciceTrainingDto[];

  constructor(libelle_, duree_, exercices_) {
    this.libelle = libelle_;
    this.duree = duree_;
    this.exercices = exercices_;
  }
}
