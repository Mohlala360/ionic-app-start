import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoolVehiclePageRoutingModule } from './pool-vehicle-routing.module';

import { PoolVehiclePage } from './pool-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoolVehiclePageRoutingModule
  ],
  declarations: [PoolVehiclePage]
})
export class PoolVehiclePageModule {}
