import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {
  isLoading = false;

  constructor(private loaderService:LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoadingOn.subscribe((data)=>{
      this.isLoading = data;
    },error=>{

    })
  }

}
