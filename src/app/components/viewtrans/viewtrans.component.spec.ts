import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtransComponent } from './viewtrans.component';

describe('ViewtransComponent', () => {
  let component: ViewtransComponent;
  let fixture: ComponentFixture<ViewtransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
