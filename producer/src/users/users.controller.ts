import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from './users.interface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UserService', 'GetFilteredUsers')
  async getFilteredUsers(): Promise<{ users: User[] }> {
    return { users: await this.usersService.getFilteredUsers() };
  }
}
