import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTypePageRoutingModule } from './update-type-routing.module';

import { UpdateTypePage } from './update-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTypePageRoutingModule
  ],
  declarations: [UpdateTypePage]
})
export class UpdateTypePageModule {}
