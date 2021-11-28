import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercices } from 'src/entities/Exercices';
import { Repository } from 'typeorm';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercices)
    private exercisesRepository: Repository<Exercices>,
  ) {}

  findAll() {
    return this.exercisesRepository.find();
  }
}
