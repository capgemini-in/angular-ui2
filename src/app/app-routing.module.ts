    import { ModelComponent } from './model/model.component';
import { MenuComponentComponent } from './menu/menu-component.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CarviewComponent } from './carview/carview.component';
import { TestSlideComponent } from './test-slide/test-slide.component';
import { LocateDealerComponent } from './locate-dealer/locate-dealer.component';

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
      path: 'testSlide',
      component: TestSlideComponent
    },
    {
      path: 'locate-dealer',
      component: LocateDealerComponent
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
