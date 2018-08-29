import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-slide',
  templateUrl: './test-slide.component.html',
  styleUrls: ['./test-slide.component.scss', './test-slide.component.css']
})
export class TestSlideComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {

  }

}
