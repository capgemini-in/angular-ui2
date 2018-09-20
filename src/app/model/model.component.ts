import { ModelService } from './../model.service';
import { CarService } from './../services/car.service'; 
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {MenuComponentComponent} from './../menu/menu-component.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  modelNames:any;
  carList: any;
  imageHostURL = "http://10.220.28.100:8082//pocwebapp";
  breadCumbs=[];

  constructor(private modelService:ModelService,private  router: Router, private carService: CarService, private menuComp: MenuComponentComponent, private activateRoute: ActivatedRoute) { 
    this.modelNames=modelService.cars;
  }

  ngOnInit() {
    console.log(this.activateRoute);

    
    let currBaseURL = this.menuComp.getBaseURL(this.router.url);
    this.menuComp.currentURL = currBaseURL;
    console.log(currBaseURL);

    let currentURL = this.router.url.split("?");
    let queryParamsJSON = {};
    
    let queryParams = (currentURL[1]  ? currentURL[1] : null );
    if(queryParams){
        let queryParamsArr = queryParams.split("&");
        for(let i=0;i<queryParamsArr.length;i++){
          let q = queryParamsArr[i].split("=");
          queryParamsJSON[q[0]] =q[1];
        }
    }
    
    //queryParams = queryParams.currentUrlTree.queryParams;
    
    console.log(queryParamsJSON);
    let category = queryParamsJSON["category"];


    if(category !== undefined){
      this.carService.getCars(category).subscribe(response=>{
          console.log("Cars List:");
          console.log(response);
          this.carList = response;
      });
    }
  }

  viewCar(modelID){
  	this.router.navigate(["./Cars/view"],{'queryParams' :{'id': modelID}});
  }

}
