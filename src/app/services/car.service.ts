import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(categoryId):Observable<any>{
    return this.http.get("http://10.220.28.100:8083/pocwebapp/model/variant/?subMenuId="+categoryId);
  }
}
