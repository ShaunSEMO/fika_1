import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripDetsPageRoutingModule } from './trip-dets-routing.module';

import { TripDetsPage } from './trip-dets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripDetsPageRoutingModule
  ],
  declarations: [TripDetsPage]
})
export class TripDetsPageModule {}
