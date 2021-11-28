import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TrainingsModule } from './modules/trainings/trainings.module';
import { ExercisesModule } from './modules/exercises/exercises.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    TrainingsModule,
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
