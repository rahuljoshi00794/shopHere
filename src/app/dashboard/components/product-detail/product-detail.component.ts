import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  currentDisplayedImage:string;
  selectedVarient:any;
  selectedColor:any;
  productInfo:any;
  product_data:any;
  constructor(private dashboardSvc:DashboardService ) { }

  ngOnInit(): void {
    this.fetchProductDetails();
  }

  fetchProductDetails(){
    this.dashboardSvc.getProductDetails(121).subscribe((data)=>{
      this.product_data  = data;
      this.setInitialData();
    }, (error)=>{

    });
  }
  setInitialData(){
    this.currentDisplayedImage = this.product_data?.product_image?.[0];
    this.selectedVarient = this.product_data?.product_varients?.[0];
    this.selectedColor = this.product_data?.product_varients?.[0]?.colors?.[0];
    this.fetchAboutProduct();
  }
  fetchAboutProduct() {
    const string = this.product_data?.product_features;
    this.productInfo = string?.split('<li>')?.slice(1, this.productInfo?.length);
    this.productInfo = this.productInfo?.map((item) => {
      return item?.replace('</li>', '')
    });
  }
 

}
