import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  model = [
    {"id":1,"name":"Sedan","img":"/src/assets/Model/Sedan.jpg","url":""}, 
    {"id":2,"name":"Coupe","img":"/src/assets/Model/Coupe.jpg","url":""},
    {"id":3,"name":"Gran Tursimo","img":"/src/assets/Model/Gran Tourse.jpg","url":""},
    {"id":4,"name":"4","img":"/src/assets/Model/4.jpg","url":""},
    {"id":5,"name":"5","img":"/src/assets/Model/5.jpg","url":""}
  ]; 
  constructor() { }
}
