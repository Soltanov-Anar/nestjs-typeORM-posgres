import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user/user.service';
import { UserEntity } from '../entities/user.entity';
import { CreateUserInput } from '../inputs/create-user.input';
import { UpdateUserInput } from '../inputs/update-user.input';

@Controller("user")
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Get()
  getAll(): Promise<UserEntity[]> {
    return this.userService.getAllUsers()
  }

  @Get(':id')
  getOne(@Param("id") id: string): Promise<UserEntity> {
    return this.userService.getOneUser(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header("Cache-Control", "none")
  create(@Body() createUserDto: CreateUserInput): Promise<UserEntity> {
    return this.userService.createUser(createUserDto)
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<number> {
    return this.userService.removeUser(+id)
  }

  @Put()
  update(@Body() updateUserDto: UpdateUserInput): Promise<UserEntity> {
    return this.userService.updateUser(updateUserDto);
  }
}