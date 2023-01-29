import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { SuperAdminComponent } from './super-admin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path:'',
  component:SuperAdminComponent,
  children:[
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
      path:'users',
      component:UsersComponent,
      data:{
        metadata : {
          title:'Users',
          description :'Loerm loerm loerm loerm'
        }
      }
    },
    {
      path:'projects',
      component:ProjectsComponent,
      data:{
        metadata : {
          title:'Users',
          description :'Loerm loerm loerm loerm'
        }
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
