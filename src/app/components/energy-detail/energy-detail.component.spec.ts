import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EnergyType } from '../../classes/energy-type';
import { EnergyDetail } from '../../classes/energy-detail';
import { EnergyDetailService } from '../../services/energy-detail.service';

@Component({
  selector: 'app-energy-detail',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './energy-detail.component.html',
  styleUrl: './energy-detail.component.css'
})
export class EnergyDetailComponent implements OnInit {

  energyDetail:EnergyDetail[]=[]

  constructor(private energyDetailService:EnergyDetailService){}

  ngOnInit(): void {
    this.energyDetailList()   
      
  }

  energyDetailList(){
    this.energyDetailService.getEnergyDetailList().subscribe(
      data => {
        this.energyDetail = data
        console.log(this.energyDetail)
      }
    )
  }
  

}
