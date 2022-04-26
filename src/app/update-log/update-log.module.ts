import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateLogPageRoutingModule } from './update-log-routing.module';

import { UpdateLogPage } from './update-log.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateLogPageRoutingModule
  ],
  declarations: [UpdateLogPage]
})
export class UpdateLogPageModule {}
