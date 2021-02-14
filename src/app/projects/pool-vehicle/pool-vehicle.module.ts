import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoolVehiclePageRoutingModule } from './pool-vehicle-routing.module';

import { PoolVehiclePage } from './pool-vehicle.page';
import { LoadingComponent } from 'src/app/common/loading/loading.component';
import { FooterComponent } from 'src/app/common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoolVehiclePageRoutingModule
  ],
  declarations: [PoolVehiclePage,LoadingComponent,FooterComponent]
})
export class PoolVehiclePageModule {}
