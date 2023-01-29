import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 @Output() toggleMenuClickedEvent : EventEmitter<boolean> = new EventEmitter()
 @Output() toggleRightMenuClickedEvent : EventEmitter<boolean> = new EventEmitter()
 
 showNotifs : boolean = false;
 showProjects : boolean = false;

 onNotifsShow(){
  this.showNotifs = true;
 }
 onNotifsHide(){
  this.showNotifs = false;
 }

 onProjectsShow(){
  this.showProjects = true;
 }
 onProjectsHide(){
  this.showProjects = false;
 }

 toggleAside(){
  this.toggleMenuClickedEvent.emit(true)
}

toggleAsideRight(){
  this.toggleRightMenuClickedEvent.emit(true)
}

}
