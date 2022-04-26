import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateLogPage } from './update-log.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateLogPageRoutingModule {}
