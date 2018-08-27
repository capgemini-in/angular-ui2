import { ModelService } from './../model.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

modelNames:any;

  constructor(private modelService:ModelService,private  router: Router) { 
    this.modelNames=modelService.cars;
  }

  ngOnInit() {
  }

  viewCar(modelID){
  	this.router.navigate(["./Cars/view"],{'queryParams' :{'id': modelID}});
  }

}
