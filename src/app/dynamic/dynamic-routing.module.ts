import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DMainComponent } from './d-main/d-main.component';
import { DLinkComponent } from './d-link/d-link.component';
import { DStaticComponent } from './d-static/d-static.component';

const routes: Routes = [
  {
    path:'',
    component:DMainComponent,
    //redirectTo:'link/1',
    children:[      
      {
        path:'link/:id',
        component:DLinkComponent
      },
      {
        path:'static',
        component:DStaticComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
