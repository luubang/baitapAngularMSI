import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ListlaptopComponent } from './baitap4-listlaptop.component';

describe('Baitap4ListlaptopComponent', () => {
  let component: Baitap4ListlaptopComponent;
  let fixture: ComponentFixture<Baitap4ListlaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ListlaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ListlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
