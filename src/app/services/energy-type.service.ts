import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnergyType } from '../classes/energy-type';

@Injectable({
  providedIn: 'root'
})
export class EnergyTypeService {

  private url:string= 'http://localhost:8080/energyType'

  constructor(private http: HttpClient) {}

  getEnergyTypeList():Observable<EnergyType[]>{
    return this.http.get<EnergyType[]>(this.url)

  }
}