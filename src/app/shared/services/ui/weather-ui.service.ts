import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, timer } from 'rxjs';
import { Coord } from '../http/models/open-weather-response.model';
import { WeatherService } from '../http/weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherUiService {

  private coordinates: Subject<Coord> = new ReplaySubject(1);
  public $temperatureOnFarenheit: Subject<number> = new Subject();

  constructor(private weatherService: WeatherService) { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(coordinate => this.loadCoordinates(coordinate));
    }
    this.startPollingTemperature();
  }


  startPollingTemperature() {
    this.coordinates.subscribe(coordinate => {
      const source = timer(1000,30000);
      source.subscribe(() => {
        this.weatherService
          .getWeather(coordinate)
          .subscribe(weather => {
            const temperatureOnKelvins = weather.main.temp;
            const temperatureOnFarenheit = (temperatureOnKelvins - 273.15)*9/5 +32;
            this.$temperatureOnFarenheit.next(temperatureOnFarenheit);
          })
      });
    })
  }

  loadCoordinates(loadCoordinates) {
    console.log(loadCoordinates)
    const { longitude, latitude} = loadCoordinates.coords;
    this.coordinates.next({
      lat: latitude,
      lon: longitude
    });
  }
}
