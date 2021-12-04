import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  sendData(datafromform:NgForm)

 {
   console.log(datafromform);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
