import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private weatherUrl = 'api/weather'

  ngOnInit() {

  }

  // // Need to get a Days observable api
  // daysOfWeather$ = this.http.get<Days[]>(this.weatherUrl)
  //   .pipe(
  //       map(days =>
  //           days.map(day => ({
  //                   ...day,  // <-- spread operator
  //                   temp: day.temp ? day.temp - 273.15 : 0
  //                   // If day.temp exists, subtract 273.15, otherwise set day.temp to 0.
  //               })
  //           ))
  //   )

}
