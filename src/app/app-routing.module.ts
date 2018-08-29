import { GalleryComponent } from './gallery/gallery.component';
import { ModelComponent } from './model/model.component';
import { MenuComponentComponent } from './menu/menu-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CarviewComponent } from './carview/carview.component';

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
      ]
  }

  


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
