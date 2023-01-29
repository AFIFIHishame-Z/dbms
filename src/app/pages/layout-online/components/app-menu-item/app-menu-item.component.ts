import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfoService } from '../../core/page-info.service';

@Component({
  selector: '[dbms-app-menu-item]',
  template: `
    <ng-container>
      <a [routerLink]="item.path" (click)="navigate()" *ngIf="!item.separator" class=" text-gray-800 hover:text-primary-dark hover:bg-gray-200 rounded-md group flex items-center gap-x-1 w-full h-[40px]  px-2 cursor-pointer mb-2">
        <span class="text-gray-400 group-hover:text-primary-dark w-[30px]">
        <span [inlineSVG]="'/assets/images/icons/'+item.icon"></span>
        </span>
        <span class="relative top-[1px] font-monsterratMedium">
          {{item.label}}
        </span>
      </a>
      <div class="my-5 px-1" *ngIf="item.separator">
          <div class="border-b-[1px] border-dashed border-gray-400  w-full"></div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./app-menu-item.component.scss'],
})
export class AppMenuItemComponent {
  @Input() item: any;

  @Input() index!: number;

  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;

  
  constructor(private pageInfoService : PageInfoService) {
    
  }


  @Output() navigateEvent : EventEmitter<boolean> = new EventEmitter(false)
  navigate(){
    this.pageInfoService.setBreadcrumbs=this.item.breadcrumbs
    
    this.navigateEvent.emit(true)
  }
}
