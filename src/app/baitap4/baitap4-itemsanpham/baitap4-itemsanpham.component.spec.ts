import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemsanphamComponent } from './baitap4-itemsanpham.component';

describe('Baitap4ItemsanphamComponent', () => {
  let component: Baitap4ItemsanphamComponent;
  let fixture: ComponentFixture<Baitap4ItemsanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemsanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
