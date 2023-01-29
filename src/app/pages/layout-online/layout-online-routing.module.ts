import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutOnlineComponent } from './layout-online.component';

const routes: Routes = [{
  path:'',
  component : LayoutOnlineComponent,
  children:[{
    path:'dashboard',
    loadChildren:()=>import('~/app/pages/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'super-admin',
    loadChildren:()=>import('~/app/modules/online/super-admin/super-admin.module').then(m=>m.SuperAdminModule)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutOnlineRoutingModule { }
