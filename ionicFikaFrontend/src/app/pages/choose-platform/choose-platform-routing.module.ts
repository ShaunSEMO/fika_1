import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosePlatformPage } from './choose-platform.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosePlatformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosePlatformPageRoutingModule {}
