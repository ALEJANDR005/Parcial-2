import { Injectable } from '@angular/core';
import { Conferencia } from './conferencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {
  private apiServerUrl = environment.baseUrl + "conferencia.json";


  constructor(private htttp:HttpClient) { }

  getConferencias(): Observable<Conferencia[]> {
  return this.htttp.get<Conferencia[]>(this.apiServerUrl);

  }
} 