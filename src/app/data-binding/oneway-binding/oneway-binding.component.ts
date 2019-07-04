import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
  /*****  viết code ở đây *****/
  name: string = "CyberSoft";

  /*******************************/
  constructor() { }

  ngOnInit() { }

  //EventBinding 
  eventBinding(value) {
    console.log(value);
  }

}
