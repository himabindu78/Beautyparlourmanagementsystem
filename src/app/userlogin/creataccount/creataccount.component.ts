import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creataccount',
  templateUrl: './creataccount.component.html',
  styleUrls: ['./creataccount.component.css']
})
export class CreataccountComponent implements OnInit {

  sendData(datafromform:NgForm)

  {
    console.log(datafromform);
   }

  constructor() { }

  ngOnInit(): void {
  }

}
