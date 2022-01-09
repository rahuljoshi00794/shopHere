import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private apiMap = new Map();
  private $isLoading = new Subject<boolean>(); 
  public isLoadingOn = this.$isLoading.asObservable();

  constructor() { }

   startLoadingFor(url){
    this.apiMap.set(url,'loading');
    this.checkForLoading();
   }
   stopLoadingFor(url){
    this.apiMap.delete(url);
    this.checkForLoading();
   }

   checkForLoading(){
     if(this.apiMap.size==1){
       this.$isLoading.next(true);
     }
     if(this.apiMap.size==0){
      this.$isLoading.next(false)
     }
   }

}
