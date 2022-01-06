import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material.module';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  schemas:[]
})
export class SharedModule { }
