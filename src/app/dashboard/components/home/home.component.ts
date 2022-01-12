import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataSharingService } from 'src/app/shared/data-sharing.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy{
  productList:any;
  searchedSubsription:Subscription;
  masterProductList:any;
  constructor( private dashboardService:DashboardService,private sharingSvc:DataSharingService) { }

  ngOnInit(): void {
    this.dashboardService.getProducts().subscribe((data:any)=>{
      this.productList= data?.products;
      this.masterProductList = this.productList;
    },
    (error)=>{

    })
    this.checkForSearchValue();
    
  }

  checkForSearchValue(){
    this.searchedSubsription = this.sharingSvc.$searchedValue.subscribe((data)=>{
      this.productList = this.masterProductList.filter((item)=>{
        return item?.product_name?.toLowerCase().includes(data.toLowerCase());
      })
    },
    (error)=>{

    })
  }

  ngOnDestroy(): void {
      if(this.searchedSubsription){
        this.searchedSubsription.unsubscribe();
      }
  }

}
