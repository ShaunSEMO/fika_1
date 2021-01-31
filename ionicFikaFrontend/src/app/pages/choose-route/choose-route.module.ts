import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseRoutePageRoutingModule } from './choose-route-routing.module';

import { ChooseRoutePage } from './choose-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseRoutePageRoutingModule
  ],
  declarations: [ChooseRoutePage]
})
export class ChooseRoutePageModule {}
