import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Bike } from './bike-list/Bike';

const URL = 'https://5fd0c7f61f23740016632327.mockapi.io/api/bikes';

@Injectable({
  providedIn: 'root'
})
export class BikeDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Bike[]>{
    return this.http.get<Bike[]>(URL)
      .pipe(
        tap( (bikes: Bike[]) => bikes.forEach(bike => bike.quantity = 0)))
  }
}
