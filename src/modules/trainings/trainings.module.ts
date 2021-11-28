import { Module } from '@nestjs/common';
import { EntrainementsService } from './trainings.service';
import { TrainingsController } from './trainings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrainements } from 'src/entities/Entrainements';
import { Combinaisons } from 'src/entities/Combinaisons';
import { Exercices } from 'src/entities/Exercices';

@Module({
  imports: [TypeOrmModule.forFeature([Entrainements, Combinaisons, Exercices])],
  controllers: [TrainingsController],
  providers: [EntrainementsService],
})
export class TrainingsModule {}
