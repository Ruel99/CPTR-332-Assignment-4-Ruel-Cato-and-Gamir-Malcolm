import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateLogsPageRoutingModule } from './create-logs-routing.module';

import { CreateLogsPage } from './create-logs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateLogsPageRoutingModule
  ],
  declarations: [CreateLogsPage]
})
export class CreateLogsPageModule {}
