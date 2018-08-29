import { GalleryComponent } from './../gallery/gallery.component';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-carview',
  templateUrl: './carview.component.html',
  styleUrls: ['./carview.component.css']
})
export class CarviewComponent implements OnInit {
isOn=true;
img ="src/assets/carImageBlack.JPG";
displaycover="visible";
display360="invisible";
displaygallery="invisible";
imgarray=[
  {id:"1",color:"w3-btn w3-red",img:"src/assets/carimage.png"},
  {id:"2",color:"w3-btn w3-black",img:""},  
  {id:"3",color:"w3-btn w3-blue",img:""}
];
  constructor(private router:Router) { }

  color(id)
  {
    if(id==1)
    {
      // this.img="src/assets/carImageRed.JPG";
    }
    if(id==2)
    {
      this.img="src/assets/carImageBlack.JPG";
    }
    if(id==3)
    {
      this.img="src/assets/carImageBlue.JPG";
    }
  }

  
  
  

  cover(event)
  {
    this.displaycover="visible";
    this.display360="invisible";
    this.displaygallery="invisible";

  }

  gall
  exp30(event)
  {
    this.display360="visible";
    this.displaycover="invisible";
    this.displaygallery="invisible";
  }


 
  ngOnInit() {
  }

}
