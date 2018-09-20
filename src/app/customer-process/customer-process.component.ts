import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-customer-process',
  templateUrl: './customer-process.component.html',
  styleUrls: ['./customer-process.component.css']
})
export class CustomerProcessComponent implements OnInit {

  imageHostURL = "http://10.220.28.100:8082//pocwebapp";

  accordian_data = [
 	{"heading": "PERSONAL INFORMATION", show: true, button: "active"},
 	{"heading": "VEHICLE DETAILS"},
 	{"heading": "EXCHANGE DETAILS"},
 	{"heading": "FINANCE"},
 	{"heading": "CHECKOUT"}
  ];

  user_data = {
  		firstName: "",
  		lastName: "",
  		mobileNo: "",
  		email: "",
  		dealerSelected: 1,
  		variantSelected: -1,
  		colorSelected: -1
  }

  active_step = 0;

  vehicleList:any;

  colorOption = ["Black","Blue", "Green", "Red"];

  constructor(private carService: CarService) { }

  ngOnInit() {
  	this.carService.getCars(4).subscribe(response=>{
  		this.vehicleList = response;
  	});

  }

  formSubmit(step){
  	alert("form submitted");
  	this.accordian_data[step]["show"] = false;
  	this.accordian_data[step]["button"] = "";

  	this.active_step= this.active_step +1;
  	this.accordian_data[this.active_step]["show"] = true;
  	this.accordian_data[this.active_step]["button"] = "active";

  }

}
