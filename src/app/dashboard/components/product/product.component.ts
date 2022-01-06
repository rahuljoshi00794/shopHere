import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('product') product:any;

  constructor() { }

  ngOnInit(): void {
  }
  getPricePostDiscount(product){
    return product?.product_price - (product.discountPercentage*product?.product_price*0.01);
  }

}
