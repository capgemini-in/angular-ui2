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

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { GalleryComponent } from './gallery/gallery.component';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'angular2-lightbox';




@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    MenuComponentComponent,
    ModelComponent,
    ImageSliderComponent,
    CarviewComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    Ng2CarouselamosModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    GalleryModule.forRoot(),
    LightboxModule 



   
  ],

  providers: [MenuItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
