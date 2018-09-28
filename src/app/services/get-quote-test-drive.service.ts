import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './../constants'

@Injectable({
  providedIn: 'root'
})
export class GetQuoteTestDriveService {

  constants= new Constants();

   httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type': 'application/json',
  		'Accept': 'application/json'
	  })
	};


  constructor(private http: HttpClient) { }

  postGetQuote(userModel){
  	return this.http.post("http://10.220.28.100:8083/pocwebapp/model/quotationRequest/", userModel,this.httpOptions);
  }  

  getQuotations_forDealers(){
    return this.http.get(this.constants.API_BASEURL+"/model/getQuotationRequest/?dealerId=1");
  }

  uploadQuote(input){
    return this.http.post(this.constants.API_BASEURL+"/files/uploadQuotation/", input, this.httpOptions);
  }

  postBookOnline(requestJson){
    console.log(requestJson);
    return this.http.post(this.constants.API_BASEURL+"/model/bookingRequest/", requestJson, this.httpOptions);
  }

  getQuotations_forCustomers(userId){
    return this.http.get(this.constants.API_BASEURL+"/model/getQuotation/?userId="+userId);
  }

}
