import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailsComponent } from "./hero-details/hero-details.component";

const routes: Routes = [
  {
    path: 'heroes/:id',
    component: HeroDetailsComponent
  },
  {
    path: '',
    redirectTo: '/heroes/1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
