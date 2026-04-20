import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { IObservation } from '../models/observation';

@Injectable({ providedIn: 'root' })
export class ObservationService {
  private apiUrl = 'http://localhost:3000/api/observations'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<IObservation[]> {
    return this.http.get<IObservation[]>(this.apiUrl).pipe(
      map(data => data.sort((a, b) => b.date.localeCompare(a.date))), 
      catchError(err => {                                            
        console.error('Observation fetch failed', err);
        return throwError(() => new Error('Could not load sky logs.'));
      })
    );
  }
}