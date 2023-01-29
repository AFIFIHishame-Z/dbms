import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '~/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    SuperAdminComponent,
    UsersComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedModule
  ]
})
export class SuperAdminModule { }
