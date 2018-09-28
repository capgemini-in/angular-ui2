
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { BaseUrl } from './config';


@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
    MenuItem = [
          {"id": 10, name: "HOME"},
          {
            "id":1,"name":"Model", children: [
            {id:1, name: "SUV"},
            {id:2, name: "Sedan"},
            {id:3, name: "Coupe"},
            {id:4, name: "ALL"}
          ] }, 
          {"id":2,"name":"Shopping"},
          {"id":3,"name":"Services"},
          {"id":8, "name": "Locate Dealer"}
          /*{"id":4,"name":"Finance"},
          {"id":5,"name":"Approved Used"},
          {"id":6,"name":"Accessories"},
           {"id":7,"name":"Service"},*/
        ]; 

 constructor(private http: HttpClient) { 
    
  }

  getMenus():Observable<any>{
    return this.http.get("http://10.220.28.100:8083/pocwebapp/model/menus/");
  }
  
}

