import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observation } from '../models/observation'; // Ensure no 'I' here

@Injectable({
  providedIn: 'root'
})
export class ObservationService {
  private apiUrl = 'http://localhost:3000/api/observations';

  constructor(private http: HttpClient) {}

  saveSighting(data: Observation): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getUserJournal(username: string): Observable<Observation[]> {
    return this.http.get<Observation[]>(`${this.apiUrl}/${username}`);
  }
}