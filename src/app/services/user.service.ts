import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'http://localhost:8080/user'
  

  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> { 
    return this.http.get<User[]>(this.url)
  }
}
