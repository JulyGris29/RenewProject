import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { EnergyTypeComponent } from './components/energy-type/energy-type.component';
import { EnergyDetailComponent } from './components/energy-detail/energy-detail.component';

export const routes: Routes = [
{path:"energyDetail", component:EnergyDetailComponent},
{path:"energyType", component:EnergyTypeComponent} ,
{path:"user", component:UserComponent}
    
];
