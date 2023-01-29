import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from '~/app/shared/shared/shared.module';
import {ButtonModule} from 'primeng/button';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [    AuthComponent,
    LoginComponent,

    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ButtonModule
  ]
})
export class AuthModule { }
