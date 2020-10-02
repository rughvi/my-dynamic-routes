import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'',
        redirectTo:'/static',
        pathMatch:'full'
      },
      {
        path:'static',
        loadChildren: () => import('./static/static.module').then(s => s.StaticModule)
      },
      {
        path:'dynamic',
        loadChildren: () => import('./dynamic/dynamic.module').then(d => d.DynamicModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
