import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Beer } from './beer-list/Beer';

const URL = 'https://5fd0c7f61f23740016632327.mockapi.io/api/beers';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]>{



    return this.http.get<Beer[]>(URL)
      .pipe(
        tap( (beers: Beer[]) => beers.forEach(beer => beer.quantity = 0)))
  }
}
