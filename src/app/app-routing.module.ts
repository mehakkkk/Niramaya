import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BedComponent } from './bed/bed.component';
import { HomeComponent } from './home/home.component';
import { PlasmaComponent } from './plasma/plasma.component';

const routes: Routes = [
  {path:'beds',component:BedComponent},
  {path:'plasma',component:PlasmaComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
