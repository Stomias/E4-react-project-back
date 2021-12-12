import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EntrainementsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { ExerciceTrainingDto } from './dto/exercice-training.dto';

@Controller('trainings')
export class TrainingsController {
  constructor(private readonly entrainementsService: EntrainementsService) {}

  /**
   * Permet de créer un entrainement
   * @param createTrainingDto: {@link CreateTrainingDto}
   */
  @Post()
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.entrainementsService.create(createTrainingDto);
  }

  /**
   * Permet de récupérer la liste de tous les entrainements d'un utilisateur
   * @param idUser 
   * @returns entrainements: {@link Entrainements[]}
   */
  @Get('/user/:idUser')
  findAllTraining(@Param('idUser') idUser: number) {
    return this.entrainementsService.findAllUserTraining(+idUser);
  }

  /**
   * Permet de récupérer la liste de toutes les combinaisons d'un entrainement et d'un exercice
   * @param idEntrainement 
   * @returns {@link Combinaisons[]}
   */
  @Get('/:idEntrainement')
  findTrainingExercises(@Param('idEntrainement') idEntrainement: number) {
    return this.entrainementsService.findOneTraining(+idEntrainement);
  }

  /**
   * Permet de mettre à jour un entrainement
   * @param id 
   * @param updateTrainingDto
   */
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() exercices: ExerciceTrainingDto[],
  ) {
    return this.entrainementsService.update(+id, exercices);
  }

  /**
   * Permet de supprimer un entrainement ainsi que les combinaisons qui lui sont associées
   * @param id 
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrainementsService.remove(+id);
  }
}
