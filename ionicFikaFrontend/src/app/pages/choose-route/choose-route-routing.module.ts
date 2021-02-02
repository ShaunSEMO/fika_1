import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseRoutePage } from './choose-route.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseRoutePageRoutingModule {}
