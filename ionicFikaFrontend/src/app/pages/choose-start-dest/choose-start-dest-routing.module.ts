import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseStartDestPage } from './choose-start-dest.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseStartDestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseStartDestPageRoutingModule {}
