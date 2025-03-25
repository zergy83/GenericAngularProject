import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  
}
