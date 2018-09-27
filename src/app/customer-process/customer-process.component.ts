import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-customer-process',
  templateUrl: './customer-process.component.html',
  styleUrls: ['./customer-process.component.css']
})
export class CustomerProcessComponent implements OnInit {

  imageHostURL = "http://10.220.28.100:8083/pocwebapp";

  accordian_data = [
 	{"heading": "PERSONAL INFORMATION", show: true, button: "active"},
 	{"heading": "VEHICLE DETAILS", show: false, button: ""},
 	{"heading": "EXCHANGE DETAILS", show: false, button: ""},
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
  		colorSelected: -1,
      exchangeVehicle: 1,
      financeOption: 1,
      priceOffered: 0,
      depositAmount:0,
      paymentStatus:'complete'
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
    console.log(this.user_data);
  }

}
