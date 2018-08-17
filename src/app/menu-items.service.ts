
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
    MenuItem = [
          {"id":1,"name":"Model"}, 
          {"id":2,"name":"Build"},
          {"id":3,"name":"Offers"},
          {"id":4,"name":"Finance"},
          {"id":5,"name":"Approved Used"},
          {"id":6,"name":"Accessories"},
           {"id":7,"name":"Service"},
          
           
        ]; 

 constructor() { 
    
  }
  
}

