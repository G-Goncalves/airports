import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Array } from '../models/array.model';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {
  private apiKey: string = environment.apiKey;
  private airportsApiUrl: string = environment.airportsApiUrl;

  headerDict = {
    'x-rapidapi-host': 'airportix.p.rapidapi.com',
    'x-rapidapi-key': this.apiKey,
    "content-type": "application/json",
    "server": "RapidAPI-1.2.8",
    "x-content-type-options": "nosniff",
    "x-rapidapi-region": "AWS - eu-west-1",
    "x-rapidapi-version": "1.2.8"
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getAirports(input: string): Observable<Array> {
    return this.http.get<Array>(`${this.airportsApiUrl}country_code/${input}/%7Bclassification%7D`, this.requestOptions)
  }

  getAirportDetails(icao: string): Observable<Array> {
    return this.http.get<Array>(`${this.airportsApiUrl}code/${icao}/`, this.requestOptions)
  }

}
