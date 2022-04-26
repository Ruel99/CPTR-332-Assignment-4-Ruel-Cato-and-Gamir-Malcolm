import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'create-appointment',
    loadChildren: () => import('./create-appointment/create-appointment.module').then( m => m.CreateAppointmentPageModule)
  },
  {
    path: 'update-appointment/:id',
    loadChildren: () => import('./update-appointment/update-appointment.module').then( m => m.UpdateAppointmentPageModule)
  },
  {
    path: 'create-logs',
    loadChildren: () => import('./create-logs/create-logs.module').then( m => m.CreateLogsPageModule)
  },
  {
    path: 'update-log/:id',
    loadChildren: () => import('./update-log/update-log.module').then( m => m.UpdateLogPageModule)
  },
  {
    path: 'create-type',
    loadChildren: () => import('./create-type/create-type.module').then( m => m.CreateTypePageModule)
  },
  {
    path: 'update-type/:id',
    loadChildren: () => import('./update-type/update-type.module').then( m => m.UpdateTypePageModule)
  },
  {
    path: 'view-appointments',
    loadChildren: () => import('./view-appointments/view-appointments.module').then( m => m.ViewAppointmentsPageModule)
  },
  {
    path: 'view-logs',
    loadChildren: () => import('./view-logs/view-logs.module').then( m => m.ViewLogsPageModule)
  },
  {
    path: 'view-types',
    loadChildren: () => import('./view-types/view-types.module').then( m => m.ViewTypesPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'update-user/:id',
    loadChildren: () => import('./update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
