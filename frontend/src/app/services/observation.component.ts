import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observation } from '../models/observation'; // Checked: folder is 'models'

@Injectable({
  providedIn: 'root'
})
export class ObservationServiceComponent {
  private apiUrl = 'http://localhost:3000/api/observations';

  constructor(private http: HttpClient) { }

  getObservations(): Observable<Observation[]> {
    return this.http.get<Observation[]>(this.apiUrl);
  }
}