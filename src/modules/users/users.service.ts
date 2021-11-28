import { LoginUserDto } from './dto/login-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.usersRepository.create(createUserDto);
      await this.usersRepository.save(newUser);
      // Enlever les infos sensibles avant de renvoyer
      newUser.idUser = undefined;
      newUser.identifiant = undefined;
      newUser.motDePasse = undefined;
      // Renvoyer les infos utilisateurs
      return newUser;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST)
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.usersRepository.findOne({
      identifiant: loginUserDto.identifiant,
    });

    if (user && user.motDePasse === loginUserDto.mdp) {
      user.identifiant = undefined;
      user.motDePasse = undefined;
      return user;
    }
    throw new HttpException(
      'Identifiant ou mot de passe incorrect',
      HttpStatus.NOT_FOUND,
    );
  }

  async updateUser(updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(
      { ...updateUserDto },
      { identifiant: updateUserDto.identifiant },
    );
    // TODO enlever les infos sensibles
    return user;
  }
}
