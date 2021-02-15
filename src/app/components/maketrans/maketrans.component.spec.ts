import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaketransComponent } from './maketrans.component';

describe('MaketransComponent', () => {
  let component: MaketransComponent;
  let fixture: ComponentFixture<MaketransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaketransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaketransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
