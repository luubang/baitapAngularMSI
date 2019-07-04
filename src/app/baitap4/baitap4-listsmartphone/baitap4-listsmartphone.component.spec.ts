import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ListsmartphoneComponent } from './baitap4-listsmartphone.component';

describe('Baitap4ListsmartphoneComponent', () => {
  let component: Baitap4ListsmartphoneComponent;
  let fixture: ComponentFixture<Baitap4ListsmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ListsmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ListsmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
