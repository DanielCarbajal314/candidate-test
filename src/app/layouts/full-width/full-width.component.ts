import { Component, OnInit } from '@angular/core';
import { WeatherUiService } from 'src/app/shared/services/ui/weather-ui.service';

@Component({
  selector: 'app-full-width',
  templateUrl: './full-width.component.html',
  styleUrls: ['./full-width.component.scss']
})
export class FullWidthComponent implements OnInit {
  public temperature: number = null;

  constructor(private weatherUiService: WeatherUiService) { }

  ngOnInit(): void {
    this.weatherUiService.$temperatureOnFarenheit.subscribe(temperatureOnFarenheit => this.temperature = temperatureOnFarenheit);
  }

}
