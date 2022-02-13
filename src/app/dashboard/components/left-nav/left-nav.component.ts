import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  leftNavItems = [
    {
      key: 'price',
      label: "Price",
      values: [1000, 2000, 3000, 5000, 7000, 10000]
    },
    {
      key: 'brand',
      label: "Brand",
      values: ['HP', 'Dell', 'apple', 'lenovo', 'asus']
    },
    {
      key: 'discount',
      label: "Discount",
      values: [2, 5, 10, 15, 25]
    },
    {
      key: 'rating',
      label: "Customer Rating",
      values: [1, 2, 3, 4, 5]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
