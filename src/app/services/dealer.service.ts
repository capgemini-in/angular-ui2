import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor(private http: HttpClient) { }

  getState_City_JSON(){
  	return this.http.get("http://10.220.28.100:8082/pocwebapp/model/country/");
  }

  getDealers(state, city){
  	return this.http.get("http://10.220.28.100:8082/pocwebapp/model/dealers/?stateID="+state+"&cityId="+city);
  }


}
