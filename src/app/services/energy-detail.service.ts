import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnergyDetail } from '../classes/energy-detail';

@Injectable({
  providedIn: 'root'
})
export class EnergyDetailService {

  private url:string= 'http://localhost:8080/energyDetail'

  constructor(private http: HttpClient) { }

  getEnergyDetailList():Observable<EnergyDetail[]>{
    return this.http.get<EnergyDetail[]>(this.url)
  }
}
