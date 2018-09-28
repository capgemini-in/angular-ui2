import { Component, OnInit } from '@angular/core';
import { GetQuoteTestDriveService } from './../services/get-quote-test-drive.service';
import {MatPaginator, MatSort} from '@angular/material';
import {Constants} from './../constants';

@Component({
  selector: 'app-customer-quotation-view',
  templateUrl: './customer-quotation-view.component.html',
  styleUrls: ['./customer-quotation-view.component.css']
})
export class CustomerQuotationViewComponent implements OnInit {

  constants = new Constants();
  quotationList:any;

  tablerHeaders;


  constructor(private quotationService:  GetQuoteTestDriveService) { }

  ngOnInit() {
  	this.tablerHeaders = this.constants.CUST_QUOTATION_TBL_HEADERS;
  	this.quotationService.getQuotations_forDealers().subscribe(response=>{
  		this.quotationList= response;
  		console.log(response);
  	});
  
  }

}
