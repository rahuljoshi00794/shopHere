import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../services/http-wrapper.service';

@Injectable()
export class DashboardService {

  constructor(private httpWrapper:HttpWrapperService) { }

  getProducts(){
    return this.httpWrapper.get('/assets/json/products.json');
  }

  getProductDetails(id){
    return this.httpWrapper.get('/assets/json/product-detail.json')
  }
}
