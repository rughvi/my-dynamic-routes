import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DMainComponent } from './d-main/d-main.component';
import { DOneComponent } from './d-one/d-one.component';
import { DTwoComponent } from './d-two/d-two.component';
import { DStaticComponent } from './d-static/d-static.component';
import { DLinkComponent } from './d-link/d-link.component';


@NgModule({
  declarations: [DMainComponent, DOneComponent, DTwoComponent, DStaticComponent, DLinkComponent],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule { }
