import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

//Twoway Binding 
//khai báo
import { FormsModule } from '@angular/forms';
//khai báo bài tập
import { BaitapBindingComponent } from './baitap-binding/baitap-binding.component';

@NgModule({
  declarations: [DataBindingComponent, OnewayBindingComponent, TwowayBindingComponent,BaitapBindingComponent],
  exports : [DataBindingComponent],
  // export
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataBindingModule { }
