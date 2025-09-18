import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

import { User } from './users.interface';

@Injectable()
export class UsersService {
  async getFilteredUsers(): Promise<User[]> {
    const filePath = path.join(__dirname, '../data/users.json');
    const rawData = await fs.readFile(filePath, 'utf-8');
    const users: User[] = JSON.parse(rawData);

    return users.filter((user) => user.age > 18);
  }
}
