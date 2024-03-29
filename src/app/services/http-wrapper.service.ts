import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(private http:HttpClient) {
    
   }

   get(url){
     return this.http.get(url);
   }
   post(url,body){
     return this.http.post(url,body);
   }
   delete(url){
     return this.http.delete(url);
   }
}
