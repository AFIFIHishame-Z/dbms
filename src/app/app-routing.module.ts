import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'',
    loadChildren:()=> import('~/app/pages/layout-online/layout-online.module').then((m)=>m.LayoutOnlineModule)
  },
  {
    path :'auth',
    loadChildren:()=> import('~/app/modules/offline/auth/auth.module').then((m)=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
