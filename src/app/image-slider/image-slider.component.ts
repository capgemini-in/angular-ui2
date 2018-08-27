import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  imgsrc='/src/assets/capg.jpg';
  items: Array<any> = [];
  
  constructor() { 
    this.items = [
      { name: '/src/assets/SliderImages/4.png' },
      { name: '/src/assets/SliderImages/4.png' },
      { name: '/src/assets/SliderImages/4.png' }
    ]
  }

  ngOnInit() {
  
  }

}
