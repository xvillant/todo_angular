import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  countries: { name: string; cities: string[] }[] = [
    { name: 'Europe', cities: ['Bratislava', 'Budapest'] },
    {
      name: 'United Kingdom',
      cities: ['London', 'Warwick', 'Birmingham'],
    },
    {
      name: 'United States',
      cities: ['New York', 'Chicago', 'Washington'],
    },
    {
      name: 'Australia',
      cities: ['Sydney', 'Adelaide', 'Melbourne'],
    },
    {
      name: 'Pakistan',
      cities: ['Lahore', 'Karachi', 'Islamabad'],
    },
  ];

  cityControl: FormControl;
  countryControl: FormControl;
  cities$: Observable<string[]>;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value], { relativeTo: this.route });
    });

    this.countryControl = new FormControl('');
    this.cities$ = this.countryControl.valueChanges.pipe(
      map((country) => country.cities)
    );
  }

  ngOnDestroy() {}
}
