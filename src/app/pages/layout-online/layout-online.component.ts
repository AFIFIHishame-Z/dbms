import { Component } from '@angular/core';

@Component({
  selector: 'dbms-layout-online',
  templateUrl: './layout-online.component.html',
  styleUrls: ['./layout-online.component.scss']
})
export class LayoutOnlineComponent {
  toggleSideBar : boolean = false;
  toggleRightSideBar : boolean = false;
}
