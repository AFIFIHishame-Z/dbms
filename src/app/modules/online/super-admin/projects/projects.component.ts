import { Component } from '@angular/core';

@Component({
  selector: 'dbms-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  displayAddProject : boolean = false;
  visibleAddProject : boolean = false;

  displayDialogAddProject(){
    this.displayAddProject = true;
    this.visibleAddProject = true;
  }
}
