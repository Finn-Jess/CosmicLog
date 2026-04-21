import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observation } from './observation'; // This path was wrong on GitHub

@Injectable({
  providedIn: 'root'
})
export class ObservationService {
  private apiUrl = 'http://localhost:3000/api/observations';

  constructor(private http: HttpClient) { }

  getObservations(): Observable<Observation[]> {
    return this.http.get<Observation[]>(this.apiUrl);
  }
}