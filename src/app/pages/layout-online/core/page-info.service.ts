import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {
 breadcrumbs : BehaviorSubject<string>;
  constructor() {
    this.breadcrumbs = new BehaviorSubject('Dashboard');
   }

  
  public set setBreadcrumbs(v : string) {
    this.breadcrumbs.next(v)
  }
  
  
}
