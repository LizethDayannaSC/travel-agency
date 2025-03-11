import { Component } from '@angular/core';
import { CountryLocationComponent } from '../country-location/country-location.component';

@Component({
  selector: 'app-home',
  imports: [CountryLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
