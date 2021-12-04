import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  sendData(datafromform:NgForm)

  {
    console.log(datafromform);
   }
  constructor() { }

  ngOnInit(): void {
  }

}
