import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripDetsPage } from './trip-dets.page';

const routes: Routes = [
  {
    path: '',
    component: TripDetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripDetsPageRoutingModule {}
