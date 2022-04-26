import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTypesPageRoutingModule } from './view-types-routing.module';

import { ViewTypesPage } from './view-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTypesPageRoutingModule
  ],
  declarations: [ViewTypesPage]
})
export class ViewTypesPageModule {}
