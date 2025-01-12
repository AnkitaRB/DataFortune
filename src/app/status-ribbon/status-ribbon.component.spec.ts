import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRibbonComponent } from './status-ribbon.component';

describe('StatusRibbonComponent', () => {
  let component: StatusRibbonComponent;
  let fixture: ComponentFixture<StatusRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusRibbonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
