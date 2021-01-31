import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseStartDestPageRoutingModule } from './choose-start-dest-routing.module';

import { ChooseStartDestPage } from './choose-start-dest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseStartDestPageRoutingModule
  ],
  declarations: [ChooseStartDestPage]
})
export class ChooseStartDestPageModule {}
