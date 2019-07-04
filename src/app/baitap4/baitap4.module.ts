import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4ItemsanphamComponent } from './baitap4-itemsanpham/baitap4-itemsanpham.component';
import { Baitap4ListsmartphoneComponent } from './baitap4-listsmartphone/baitap4-listsmartphone.component';
import { Baitap4ListlaptopComponent } from './baitap4-listlaptop/baitap4-listlaptop.component';
import { Baitap4PromotionComponent } from './baitap4-promotion/baitap4-promotion.component';

@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4ItemsanphamComponent, Baitap4ListsmartphoneComponent, Baitap4ListlaptopComponent, Baitap4PromotionComponent],
  exports: [Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
