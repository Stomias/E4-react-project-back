import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercices } from 'src/entities/Exercices';

@Module({
  imports: [TypeOrmModule.forFeature([Exercices])],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
