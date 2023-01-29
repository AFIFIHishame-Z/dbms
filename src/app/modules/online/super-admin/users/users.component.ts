import { Component } from '@angular/core';

@Component({
  selector: 'dbms-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  visibleAddUser : boolean = false;
  displayAddUser : boolean = false;

  displayDialogAddUser(){
    this.visibleAddUser = true;
    this.displayAddUser = true;
  }
}
