import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Baitap3Component } from "./baitap3.component";
import { Baitap3HeaderComponent } from "./baitap3-header/baitap3-header.component";

@NgModule({
  declarations: [Baitap3Component, Baitap3HeaderComponent],
  exports: [Baitap3Component, Baitap3HeaderComponent],
  imports: [CommonModule]
})
export class Baitap3Module {}
