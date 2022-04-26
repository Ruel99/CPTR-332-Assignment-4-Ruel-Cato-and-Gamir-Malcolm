import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateLogsPage } from './create-logs.page';

const routes: Routes = [
  {
    path: '',
    component: CreateLogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateLogsPageRoutingModule {}
