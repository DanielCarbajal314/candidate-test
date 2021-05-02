import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coord, OpenWeatherResponse } from './models/open-weather-response.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private http: HttpClient) { }

  getWeather(coordinate : Coord): Observable<OpenWeatherResponse> {
    return this.http.get<OpenWeatherResponse>(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinate.lat}&lon=${coordinate.lon}&appid=${environment.weatherKey}`);
  }

}
