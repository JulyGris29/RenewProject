import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { EnergyTypeComponent } from './components/energy-type/energy-type.component';
import { UsersComponent } from './component/users/users.component';
import { EnergyDetail } from './classes/energy-detail';
import { EnergyDetailComponent } from './components/energy-detail/energy-detail.component.spec';

export const routes: Routes = [
{path:"energyType", component:EnergyTypeComponent} ,
{path:"user/:id", component:UserComponent},
{path:"users", component:UsersComponent},
{path:"user", component:UserComponent},
{path:"energyDetail", component:EnergyDetailComponent},

    
];
