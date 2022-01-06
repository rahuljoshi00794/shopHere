import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  // schemas:[NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
