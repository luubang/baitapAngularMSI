import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {

  statusLogin : boolean = false;
  name: string = " ";

  constructor() { }

  ngOnInit() {
  }

  login(username, password){
    if(username === "cybersoft" && password === "cybersoft" ){
      this.statusLogin = true;
      this.name = username;
      localStorage.setItem("user",JSON.stringify(username));
    }
  }
}
