import { MenuItemsService } from './menu-items.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';

import { FormsModule }   from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import { MenuComponentComponent } from './menu/menu-component.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ModelComponent } from './model/model.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CarviewComponent } from './carview/carview.component';

import { HttpClientModule } from "@angular/common/http";
import { TestSlideComponent } from './test-slide/test-slide.component';
import  'hammerjs';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { LocateDealerComponent } from './locate-dealer/locate-dealer.component';



@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    MenuComponentComponent,
    ModelComponent,
    ImageSliderComponent,
    CarviewComponent,
    TestSlideComponent,
    LocateDealerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    NgxHmCarouselModule
  ],
  providers: [MenuItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
