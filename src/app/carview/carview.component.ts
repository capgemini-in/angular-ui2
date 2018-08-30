import { Gallery } from 'ng-gallery';
import { GalleryComponent } from './../gallery/gallery.component';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-carview',
  templateUrl: './carview.component.html',
  styleUrls: ['./carview.component.css']
})
export class CarviewComponent implements OnInit {
isOn=true;
img ="src/assets/carImageBlack.JPG";
displaycover="blank";
display360="hide";
displaygallery="hide";
private _album:Array<any>= [];

imgarray=[
  {id:"1",color:"w3-btn w3-red",img:"src/assets/carimage.png"},
  {id:"2",color:"w3-btn w3-black",img:""},  
  {id:"3",color:"w3-btn w3-blue",img:""}
];
  constructor(private router:Router,private _lightbox: Lightbox) {
    for (let i = 1; i <= 4; i++) {
      const src = 'src/assets/smallCarImages/' + i + '_extended.jpg';
      const caption = 'Image ' + i + '';
      const thumb = 'src/assets/smallCarImages/' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._album.push(album);
    }


   }

   open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }



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
    this.displaycover="blank";
    this.display360="hide";
    this.displaygallery="hide";

  }

  gallery(event)
  {
    this.displaygallery="blank";
    this.displaycover="hide";
    this.display360="hide";
    

  }
  exp30(event)
  {
    this.display360="blank";
    this.displaycover="hide";
    this.displaygallery="hide";
  }



 
  ngOnInit() {
  }

}
