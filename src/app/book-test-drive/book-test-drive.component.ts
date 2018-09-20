import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-book-test-drive',
  templateUrl: './book-test-drive.component.html',
  styleUrls: ['./book-test-drive.component.css']
})

export class BookTestDriveComponent implements OnInit {

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
