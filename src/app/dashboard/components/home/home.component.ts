import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:any;
  constructor( private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getProducts().subscribe((data:any)=>{
      this.productList= data?.products;
    },
    (error)=>{

    })
  }

}
