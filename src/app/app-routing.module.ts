import { GalleryComponent } from './gallery/gallery.component';
import { ModelComponent } from './model/model.component';
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

const routes: Routes = [
  {
  path: '',
  component: RegionComponent
  },
  {
    path: 'Cars',
    component: MenuComponentComponent,
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
      component: ModelComponent
    },
    {
      path: 'view',
      component: CarviewComponent
    },
    {
      path: 'gallery',
      component: GalleryComponent
    }
    {
      path: 'testSlide',
      component: TestSlideComponent
    },
    {
      path: 'locate-dealer',
      component: LocateDealerComponent
    },
    {
      path: 'book-online',
      component: CustomerProcessComponent 
    },
    {
      path: 'get-quote',
      component: CustomerProcessComponent 
    }
    ]
  },
  {
      path: 'testSlide',
      component: TestSlideComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
