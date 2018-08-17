import { ModelService } from './../model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

modelNames:any;

  constructor(private modelService:ModelService) { 
    this.modelNames=modelService.model;

  }

  ngOnInit() {
  }

}
