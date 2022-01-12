import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    BannerComponent,
    LoaderComponent,
  ],
  schemas:[]
})
export class SharedModule { }
