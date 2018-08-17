import { ModelComponent } from './model/model.component';
import { MenuComponentComponent } from './menu/menu-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

const routes: Routes = [
  {
  path: '',
  component: RegionComponent
  },
  {
  
  path: 'MenuComponentComponent',
  component: MenuComponentComponent,
    children:[{
    path: '',
    component: ImageSliderComponent
       },
   {
    path: 'ModelComponent',
    component: ModelComponent
    }
    ]

}

  


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
