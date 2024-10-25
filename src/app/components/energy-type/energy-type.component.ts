import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EnergyType } from '../../classes/energy-type';
import { EnergyTypeService } from '../../services/energy-type.service';


@Component({
  selector: 'app-energy-type',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './energy-type.component.html',
  styleUrl: './energy-type.component.css'
})
export class EnergyTypeComponent implements OnInit {

  energyType:EnergyType[]=[]

  constructor(private energyTypeService:EnergyTypeService){}

  ngOnInit(): void {
    this.energyType    
      
  }

  EnergyTypeList(){
    this.energyTypeService.getEnergyTypeList().subscribe(
      data => {
        this.energyType = data
        console.log(this.energyType)
      }
    )
  }
  

}
