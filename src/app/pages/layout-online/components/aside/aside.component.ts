import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbms-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Output() closeMenuClickedEvent : EventEmitter<boolean> = new EventEmitter()

  items = [
    { 
      label: 'Dashboard',
      icon:'dashboard-ico.svg',
      path:'/',
      breadcrumbs:'Dashboard'
    },
    { 
      separator:true
    },
    {
      label: 'Users',
      icon:'users-ico.svg',
      path:'/super-admin/users',
      breadcrumbs:'Users'


    },
    {
      label: 'Projects',
      icon:'projects-ico.svg',
      path:'/super-admin/projects',
      breadcrumbs:'Projects'


    },
  ];
  navigate(e : boolean){
if(e) this.closeMenuClickedEvent.emit(true)
  }
}
