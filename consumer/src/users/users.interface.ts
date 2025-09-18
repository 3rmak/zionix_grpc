import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  age: number;
}

export interface FilteredUsersResponse {
  users: User[];
}

export interface UserServiceClient {
  getFilteredUsers(empty: any): Observable<FilteredUsersResponse>;
}
