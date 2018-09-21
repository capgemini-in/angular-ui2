import { GalleryComponent } from './gallery/gallery.component';
import { ModelComponent } from './model/model.component';
import { MenuComponentComponent } from './menu/menu-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CarviewComponent } from './carview/carview.component';
import { TestSlideComponent } from './test-slide/test-slide.component';
import { LocateDealerComponent } from './locate-dealer/locate-dealer.component';
import { CustomerProcessComponent } from './customer-process/customer-process.component';
import {BookTestDriveComponent} from './book-test-drive/book-test-drive.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {
  path: '',
  component: RegionComponent
  },
  {
    path: 'Cars',
    component: MenuComponentComponent,
    data: {'breadCumb':['Showroom', 'Variants'] },
    children:[{
      path: '',
      component: ImageSliderComponent
    },
    {
      path: 'Model',
      component: ModelComponent
    },
    {
      path: 'Showroom',
      component: ModelComponent,
      data: {'submenu': 'test'}
    },
    {
      path: 'view',
      component: CarviewComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    },
    {
      path: 'testSlide',
      component: TestSlideComponent
    },
    {
      path: 'locate-dealers',
      component: LocateDealerComponent
    },
    {
        path: 'select-dealer',
        component: LocateDealerComponent,
        data: {scope: 'select-dealer'}  
    },
    {
      path: 'book-online',
      component: CustomerProcessComponent 
    },
    {
      path: 'get-quote',
      component: GetQuoteComponent 
    },
    {
      path: 'book-test-drive',
      component: BookTestDriveComponent
    }
    ]
  },
  {
      path: 'testSlide',
      component: TestSlideComponent
    }
  ];


const newRoutes:Routes = [
  {
  path: 'selectRegion',
  component: RegionComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children:[
      {
        path: 'Showroom',
        component: ModelComponent,
        data: {'submenu': 'test'}
      },
      {
        path: 'get-quote',
        component: GetQuoteComponent 
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
