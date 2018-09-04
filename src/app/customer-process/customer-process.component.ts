import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-process',
  templateUrl: './customer-process.component.html',
  styleUrls: ['./customer-process.component.css']
})
export class CustomerProcessComponent implements OnInit {

  accordian_data = [
 	{"heading": "PERSONAL INFORMATION", show: true},
 	{"heading": "VEHICLE DETAILS"},
 	{"heading": "EXCHANGE DETAILS"},
 	{"heading": "FINANCE"},
 	{"heading": "CHECKOUT"}
  ];

  active_step = 0;

  constructor() { }

  ngOnInit() {
  }

}
