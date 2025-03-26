import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //URL de test
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //get users with asyncrhonous call and pipe result trough logic in async process (if not, observable will be sync)
  getFilteredUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users: any[]) => users.filter(user => user.id < 5))
    );
  }
  
  postUser(neoUser: User): any {
    console.log('User added', neoUser);
    return this.http.post(this.apiUrl, neoUser);
  }

  //post users with asyncrhonous call and pipe result trough logic in async process (if not, observable will be sync)
  postUsersAsync(neoUser: User): Observable<any> {
    return this.http.post(this.apiUrl, neoUser).pipe(
      tap(response => {
        console.log('User added', response);
      }),
      catchError(error => {
        console.log('Error: User not added', error);
        return throwError(() => error);
      })
    );
  }
  

}
