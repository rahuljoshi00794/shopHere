import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private seachedValue = new Subject<String>();
  $searchedValue = this.seachedValue.asObservable();
  
  constructor(private dialog:MatDialog) {
   }
  searchItem(value){
    this.seachedValue.next(value);
  }
  closeAllDialog(){
    this.dialog.closeAll();
  }



}
