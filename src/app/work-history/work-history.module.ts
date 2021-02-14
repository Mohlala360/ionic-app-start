import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkHistoryPageRoutingModule } from './work-history-routing.module';

import { WorkHistoryPage } from './work-history.page';
import { LoadingComponent } from '../common/loading/loading.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkHistoryPageRoutingModule
  ],
  declarations: [WorkHistoryPage,LoadingComponent,FooterComponent]
})
export class WorkHistoryPageModule {}
