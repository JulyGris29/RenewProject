import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-energy-detail',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './energy-detail.component.html',
  styleUrl: './energy-detail.component.css'
})
export class EnergyDetailComponent {
  title = 'renewProject';  
energyDetail: any;

}
