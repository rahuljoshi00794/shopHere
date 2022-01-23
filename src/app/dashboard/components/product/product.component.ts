import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit(): void {
  }
  getPricePostDiscount() {
    return this.product?.product_price - (this.product.discountPercentage * this.product?.product_price * 0.01);
  }

  onClickProductCard() {
    this.router.navigate(['product-details',this.product?.product_id]);
  }

}
