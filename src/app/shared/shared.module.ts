import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule } from '@angular/forms';


const declarations= [
  HeaderComponent,
  FooterComponent,
  LoaderComponent,
  BannerComponent
]
@NgModule({
  declarations: [
   ...declarations
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    MaterialModule,

    //declarations
    ...declarations
  ],
  schemas:[]
})
export class SharedModule { }
