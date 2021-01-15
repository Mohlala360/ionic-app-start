import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoolVehiclePage } from './pool-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: PoolVehiclePage
  },
  {
    path: 'add',
    component: PoolVehiclePage
  },
  {
    path: ':id/edit',
    component: PoolVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoolVehiclePageRoutingModule {}
