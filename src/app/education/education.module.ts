import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationPageRoutingModule } from './education-routing.module';

import { EducationPage } from './education.page';
import { LoadingComponent } from '../common/loading/loading.component';
import { FooterComponent } from '../common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationPageRoutingModule
  ],
  declarations: [EducationPage,LoadingComponent,FooterComponent]
})
export class EducationPageModule {}
