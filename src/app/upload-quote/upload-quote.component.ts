import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GetQuoteTestDriveService } from './../services/get-quote-test-drive.service'

@Component({
  selector: 'app-upload-quote',
  templateUrl: './upload-quote.component.html',
  styleUrls: ['./upload-quote.component.css']
})
export class UploadQuoteComponent {

  

  constructor(private modalService: NgbModal) {}

  open(qtn_id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.qtn_id= qtn_id;
  }
}


@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './upload-quote.component.html',
  styleUrls: ['./upload-quote.component.css']
})
export class NgbdModalContent {
  @Input() name;
  @Input() qtn_id;

  input1=  {
              "quotation_id": this.qtn_id,
              "discountedPrice" : 0,
              "filePath": ""
            }

  constructor(public activeModal: NgbActiveModal, private quoteService: GetQuoteTestDriveService) {}

  submitQuote(){
    alert("hi");
    this.quoteService.uploadQuote(this.input1).subscribe(response=>{
        console.log(response);
    });
  }
}