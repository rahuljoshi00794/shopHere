import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardService } from './dashboard.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { FormatOptionsPipe } from './pipes/format-options.pipe';


@NgModule({
  declarations: [HomeComponent, ProductComponent, ProductDetailComponent, LeftNavComponent,FormatOptionsPipe],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  providers:[
    DashboardService
  ]
  // schemas:[NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
