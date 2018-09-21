import { Component, OnInit } from '@angular/core';
import {CarService} from '../services/car.service';
import {DealerService} from './../services/dealer.service';
import { SessionManagerService } from './../services/session-manager.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  imageHostURL = "http://10.220.28.100:8082//pocwebapp";

  user_data = {
  		firstName: "",
  		lastName: "",
  		mobileNo: "",
  		email: "",
  		dealerSelected: 1,
  		variantSelected: -1,
  		colorSelected: -1,
      delaerSelected: -1,
      stateSelected:-1,
      citySelected:-1
  }

  vehicleList:any;
  stateCityList:any;
  stateList:any;
  cityList:any;
  dealerList:any;

  

  constructor(private carService: CarService, private dealerServ: DealerService, private sessionManager:SessionManagerService) { }

  ngOnInit() {
  	this.carService.getCars(4).subscribe(response=>{
  		this.vehicleList = response;
  	});

    this.dealerServ.getState_City_JSON().subscribe(response => {
      //console.log("state city..");
      this.stateCityList = response;
    });
    this.user_data.stateSelected = parseInt(this.sessionManager.getCookie('user_selected_state'));
  }


  showCities(){
    
    this.cityList="";
    
    if(!this.user_data.stateSelected || this.user_data.stateSelected==-1){
        this.user_data.stateSelected= null;
        this.user_data.citySelected = null;
        this.cityList = null;
    }else{
      try{
        let stateIndex = this.getStateIndex(this.user_data.stateSelected);
        this.cityList = this.stateCityList[0]['state'][stateIndex]['city'];
        //console.log(this.cityList);
      }catch(e){}
    }
  }

    getStateIndex(p_stateId){
      let states = this.stateCityList[0]['state'];
      for(let i=0;i<states.length;i++){
        let stateId= states[i]['stateId'];
        if(stateId == p_stateId){
            return i;
        }
      }
  }

  renderDealers(){
      let state= this.user_data.stateSelected;
      let city= this.user_data.citySelected;

      if(state && city){
          this.dealerServ.getDealers(state, city).subscribe(response=>{
            
          try
          {
            this.dealerList  = response;
          }
          catch(e){}
          });
        }
  }

  changeCarImage(){
    	
  }



}
