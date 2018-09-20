import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  imageHostURL = "http://10.220.28.100:8082//pocwebapp";

  user_data = {
  		firstName: "",
  		lastName: "",
  		mobileNo: "",
  		email: "",
  		dealerSelected: 1,
  		variantSelected: -1,
  		colorSelected: -1
  }

  vehicleList:any;

  constructor(private carService: CarService) { }

  ngOnInit() {
  	this.carService.getCars(4).subscribe(response=>{
  		this.vehicleList = response;
  	});
  }

}
