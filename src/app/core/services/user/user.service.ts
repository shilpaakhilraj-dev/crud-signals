import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL).pipe(
      catchError((error) => {
        return throwError(() => ({
          message: 'Failed to load users',
          status: error.status
        }));
      })
    )

  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}`, user).pipe(
      catchError((error) => {
        return throwError(() => ({
          message: 'Failed to add user',
          status: error.status
        }));
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${user.id}`, user).pipe(
      catchError((error) => {
        return throwError(() => ({
          message: 'Failed to update users',
          status: error.status
        }));
      })
    );
  }

  deleteUser(userdId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${userdId}`).pipe(
      catchError((error) => {
        return throwError(() => ({
          message: 'Failed to delete the user',
          status: error.status
        }));
      })
    );
  }
}
