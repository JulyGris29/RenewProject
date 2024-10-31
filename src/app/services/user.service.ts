import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string='http://localhost:8080/user'

  constructor(private http:HttpClient) { }

  getUserList():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  createUser(data: User): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<User>(this.url, data, { headers });
  }

  updateUser(id: number, data: User): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<User>(`${this.url}/${id}`, data, { headers });
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
}