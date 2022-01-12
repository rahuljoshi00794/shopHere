import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private seachedValue = new Subject<String>();
  $searchedValue = this.seachedValue.asObservable();
  
  constructor() {
   }
  searchItem(value){
    this.seachedValue.next(value);
  }


}
