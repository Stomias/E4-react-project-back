import { Controller, Get } from '@nestjs/common';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  /**
   * Permet de récupérer la liste des exercices
   * @returns 
   */
  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }
}
