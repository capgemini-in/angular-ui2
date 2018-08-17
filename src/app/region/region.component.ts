import { MenuComponentComponent } from './../menu/menu-component.component';
import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import { Router } from "@angular/router";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  selectedCountry = 0;
  selectedState = 0;
  cities = [];
  imgsrc='/src/assets/capg.jpg';

  states = [];
  
  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }


  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.getCity().filter((item) => {
      return item.state_id === Number(state_id)
    });
  }



  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }


  getStates() {
    return [
      { id: 1, country_id: 1, name: 'New Delhi' },
      { id: 2, country_id: 1, name: 'Gurgaon' },
      { id: 3, country_id: 1, name: 'Mumbai' },
      { id: 4, country_id: 2, name: 'San Francisco' },
      { id: 5, country_id: 2, name: 'Los Angeles' },
      { id: 6, country_id: 3, name: 'New South Wales' },
      { id: 7, country_id: 3, name: 'Victoria' },
    ]
  }

  getCity() {
    return [
      { id: 1, state_id: 1, name: 'Guntur' },
      { id: 2, state_id: 1, name: 'Vijayawada' },
      { id: 3, state_id: 1, name: 'Nellore' },
      { id: 4, state_id: 1, name: 'Kadapa' },
      { id: 5, state_id: 2, name: 'Warangal' },
      { id: 6, state_id: 2, name: 'Hyderabad' },
      { id: 7, state_id: 2, name: 'Karimnagar' },
      { id: 8, state_id: 2, name: 'Kadapa' },
      { id: 9, state_id: 3, name: 'SOMA' },
      { id: 10, state_id: 3, name: 'Richmond' },
      { id: 11, state_id: 3, name: 'Sunset' },
      { id: 12, state_id: 4, name: 'Burbank' },
      { id: 13, state_id: 4, name: 'Hollywood' },
      { id: 14, state_id: 5, name: 'Sunset' },
      { id: 15, state_id: 5, name: 'Burbank' },
      { id: 16, state_id: 5, name: 'Hollywood' },
      { id: 17, state_id: 6, name: 'Benalla' },
      { id: 18, state_id: 6, name: 'Melbourne' },
    ]
  }

  redirect(selectedCountry,selectedState) { 
    let cname = selectedCountry;
    let sname=selectedState;
    
    if((cname==0)&&(sname==0)||(sname==0))
    {
      alert("Please Select a Region to Continue ")
    }
      else{
        this.loadingRegion(selectedCountry,selectedState);
        this.router.navigate(['./Cars']);
        
            }
  }

   loadingRegion(countryName:number,stateName:number)
  {
     countryName=this.selectedCountry;
     stateName=this.selectedState;
    return(stateName);
    
  }

  constructor(private router: Router) {} 

  ngOnInit() {
  }

}
