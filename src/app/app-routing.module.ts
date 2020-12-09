import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AzoteaAboutComponent } from './azotea-about/azotea-about.component';
import { AzoteaBikesComponent } from './azotea-bikes/azotea-bikes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bikes',
    pathMatch: 'full'
  },
  {
    path: 'bikes',
    component: AzoteaBikesComponent
  },
  {
    path: 'about',
    component: AzoteaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
