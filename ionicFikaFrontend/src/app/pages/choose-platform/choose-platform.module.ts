import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosePlatformPageRoutingModule } from './choose-platform-routing.module';

import { ChoosePlatformPage } from './choose-platform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosePlatformPageRoutingModule
  ],
  declarations: [ChoosePlatformPage]
})
export class ChoosePlatformPageModule {}
