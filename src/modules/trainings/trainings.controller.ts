import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntrainementsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Controller('trainings')
export class TrainingsController {
  constructor(private readonly entrainementsService: EntrainementsService) {}

  @Post()
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.entrainementsService.create(createTrainingDto);
  }

  @Get('/user/:idUser')
  findAllTraining(@Param('idUser') idUser: number) {
    return this.entrainementsService.findAllUserTraining(+idUser);
  }

  @Get('/:idEntrainement')
  findTrainingExercises(@Param('idEntrainement') idEntrainement: number) {
    return this.entrainementsService.findOneTraining(+idEntrainement);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainingDto: UpdateTrainingDto,
  ) {
    return this.entrainementsService.update(+id, updateTrainingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrainementsService.remove(+id);
  }
}
