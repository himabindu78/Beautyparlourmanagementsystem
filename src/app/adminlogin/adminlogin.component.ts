import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  sendData(datafromform:NgForm)

  {
    console.log(datafromform);
   }
  constructor() { }

  ngOnInit(): void {
  }

}
