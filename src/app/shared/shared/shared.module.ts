import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    OverlayPanelModule,
    ButtonModule,
    DialogModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    OverlayPanelModule,
    ButtonModule,
    DialogModule
  ],
})
export class SharedModule {}
