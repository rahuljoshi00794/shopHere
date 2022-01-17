import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpWrapperService } from 'src/app/services/http-wrapper.service';
import { DashboardService } from '../../dashboard.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('product') product: any;
  private dialogRef: MatDialogRef<ProductDetailComponent>;

  constructor(private dialog: MatDialog,
    private dashboardSvc: DashboardService,
    private httpWrapper: HttpWrapperService) { }

  ngOnInit(): void {
  }
  getPricePostDiscount() {
    return this.product?.product_price - (this.product.discountPercentage * this.product?.product_price * 0.01);
  }

  onClickProductCard() {
    this.dashboardSvc.getProductDetails(this.product?.product_id).subscribe((product_data) => {
      this.dialogRef = this.dialog.open(ProductDetailComponent, 
        { data: product_data,height:'90vh',width:'90vw'});
    }, error => {

    })

  }

}
