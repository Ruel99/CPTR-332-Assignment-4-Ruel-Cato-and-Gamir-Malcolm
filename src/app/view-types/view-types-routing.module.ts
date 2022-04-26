import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTypesPage } from './view-types.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTypesPageRoutingModule {}
