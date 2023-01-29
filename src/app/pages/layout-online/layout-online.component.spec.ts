import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOnlineComponent } from './layout-online.component';

describe('LayoutOnlineComponent', () => {
  let component: LayoutOnlineComponent;
  let fixture: ComponentFixture<LayoutOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
