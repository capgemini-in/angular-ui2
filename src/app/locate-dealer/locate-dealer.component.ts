import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import {DealerService} from './../services/dealer.service';

import { MapsAPILoader, AgmMap,LatLngBounds } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { Router, ActivatedRoute } from "@angular/router";
import { SessionManagerService } from './../services/session-manager.service';

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker[];
}


@Component({
  selector: 'app-locate-dealer',
  templateUrl: './locate-dealer.component.html',
  styleUrls: ['./locate-dealer.component.css']
})
export class LocateDealerComponent implements OnInit {

  states_cities;
  only_cities;
  dealers_list

  stateSelected = null;
  citySelected = null;
  scope= null;

  markerList = new Array();

  geocoder:any;
  public location:Location = {
    lat: 19.0820391,
    lng: 72.6009783,
    marker: this.markerList/*[{
      lat: 72.9573344,
      lng: 19.2164231,
      draggable: false
    },
    {
      lat: 72.8421752,
      lng: 19.2430864,
      draggable: false
    }]*/,
    zoom: 12
  };

  @ViewChild(AgmMap) map: AgmMap;

  constructor( private dealerServ: DealerService, public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper, private route: Router,
              private sessionManager: SessionManagerService,
              private activatedRoute: ActivatedRoute ) { 
      this.mapsApiLoader = mapsApiLoader;
      this.zone = zone;
      this.wrapper = wrapper;

       if(this.activatedRoute.snapshot.data && this.activatedRoute.snapshot.data["scope"]){
            this.scope = this.activatedRoute.snapshot.data["scope"];
       }   
      console.log(this.scope);  
  }

  ngOnInit() {
  	this.dealerServ.getState_City_JSON().subscribe(response => {
  		//console.log("state city..");
  		this.states_cities = response;
  	});
    this.stateSelected =this.sessionManager.getCookie('user_selected_state');
  }

  showCities(){
  	
  	this.only_cities="";
  	
    if(!this.stateSelected || this.stateSelected==-1){
  			this.stateSelected= null;
  			this.citySelected = null;
  			this.only_cities = null;
  	}else{
	  	try{
	  		let stateIndex = this.getStateIndex(this.stateSelected);
	  		console.log("stateIndex :"+stateIndex);
	  		this.only_cities = this.states_cities[0]['state'][stateIndex]['city'];
	  		//console.log(this.only_cities);
	  	}catch(e){}
  	}
  }

  getStateIndex(p_stateId){
  		let states = this.states_cities[0]['state'];
  		for(let i=0;i<states.length;i++){
  			let stateId= states[i]['stateId'];
  			if(stateId == p_stateId){
  					return i;
  			}
  		}
  }

  renderDealers(){
  		let state= this.stateSelected;
  		let city= this.citySelected;
      let this_cpy = this;
     // var bounds = new google.maps.LatLngBounds();

  		if(state && city){
  				this.dealerServ.getDealers(state, city).subscribe(response=>{
  					try{


            this.dealers_list = response;
            //this.markerList = new Array();
            console.log(response);
            
              this.dealers_list.forEach(function(r){
                console.log(r);
                this_cpy.markerList.push({
                  lng: parseFloat(r.latitude),
                  lat: parseFloat(r.longitude),
                  draggable: false
                })
              });


              this.map.mapReady.subscribe(map => {
                const bounds: LatLngBounds = new google.maps.LatLngBounds();
                alert("hi..")
                for (const mm of this.markerList) {
                  bounds.extend(new google.maps.LatLng(mm.lat, mm.lng));
                }
                map.fitBounds(bounds);
              });
            
            }catch(e){}
            console.log(this.markerList);
  				});
  		}


        /*this.mapsApiLoader.load().then(() => {
          this.geocoder = new google.maps.Geocoder();
        });*/
  }

  btn_action(dealer_id,action){
    this.route.navigate(["./Cars/"+action],{queryParams: {dealer: dealer_id}} );
  }

}
