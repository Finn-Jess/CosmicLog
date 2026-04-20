import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';
import { IObservation } from '../models/observation';

@Injectable({ providedIn: 'root' })
export class ObservationService {
  private apiUrl = 'http://localhost:3000/api/observations';

  constructor(private http: HttpClient) {}

  getObservations(): Observable<IObservation[]> {
    return this.http.get<IObservation[]>(this.apiUrl).pipe(
      map(data => data.sort((a, b) => b.date.localeCompare(a.date))),
      catchError(err => throwError(() => new Error('Sky Log Error')))
    );
  }
}