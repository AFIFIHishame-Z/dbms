import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutOnlineComponent } from './layout-online.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppMenuItemComponent } from './components/app-menu-item/app-menu-item.component';

import { LayoutOnlineRoutingModule } from './layout-online-routing.module';
import {SidebarModule} from 'primeng/sidebar';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from '~/app/shared/shared/shared.module';


@NgModule({
  declarations: [  DashboardComponent,
    LayoutOnlineComponent,
    AsideComponent,
    ContentComponent, 
    FooterComponent,
    HeaderComponent,
    ToolbarComponent,
    AppMenuItemComponent],
  imports: [
    CommonModule,
    LayoutOnlineRoutingModule,
    SidebarModule,
    SharedModule,
    InlineSVGModule.forRoot()
  ],
})
export class LayoutOnlineModule { }
