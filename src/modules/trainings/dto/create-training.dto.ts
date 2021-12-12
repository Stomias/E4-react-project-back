import { ExerciceTrainingDto } from "./exercice-training.dto";

export class CreateTrainingDto {
    idUser: number;
    libelleEntrainement: string;
    exercices: ExerciceTrainingDto[];
}