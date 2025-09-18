import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { User, UserServiceClient } from './users.interface';

@Injectable()
export class UsersService implements OnModuleInit {
  private userServiceClient!: UserServiceClient;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userServiceClient =
      this.client.getService<UserServiceClient>('UserService');
  }

  async getFilteredUsers(): Promise<User[]> {
    try {
      const response = await lastValueFrom(
        this.userServiceClient.getFilteredUsers({}),
      );
      return response.users;
    } catch (error) {
      console.error('gRPC call failed:', error);
      throw error;
    }
  }
}
