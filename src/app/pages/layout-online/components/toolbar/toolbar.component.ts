import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PageInfoService } from '../../core/page-info.service';

@Component({
  selector: 'dbms-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  bc$: Observable<string> = of('');

  constructor(private pageInfoService : PageInfoService) {
    
     
  }
  ngOnInit(): void {
    this.bc$ = this.pageInfoService.breadcrumbs.asObservable();
  }
}
