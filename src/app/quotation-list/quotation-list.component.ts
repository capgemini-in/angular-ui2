import { Component, OnInit, Input  } from '@angular/core';
import { GetQuoteTestDriveService } from './../services/get-quote-test-drive.service';
import {MatPaginator, MatSort} from '@angular/material';
import {Constants} from './../constants';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent, UploadQuoteComponent } from './../upload-quote/upload-quote.component';

@Component({
  selector: 'app-quotation-list',
  templateUrl: './quotation-list.component.html',
  styleUrls: ['./quotation-list.component.css']
})
export class QuotationListComponent implements OnInit {

  constants = new Constants();
  quotationList:any;

  tablerHeaders;


  constructor(private quotationService:  GetQuoteTestDriveService, private modalService: NgbModal) { }

  ngOnInit() {
  	
  	this.tablerHeaders = this.constants.QUOTATION_TBL_HEADERS;
  	this.quotationService.getQuotations_forDealers().subscribe(response=>{
  		this.quotationList= response;
  		console.log(response);
  	});
  	this.quotationList = this.constants.DUMMY_DATA;
  }

  uploadQuote() {
  	let obj = new UploadQuoteComponent(this.modalService);
  	obj.open(20);
  }

}




