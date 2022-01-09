import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';

import { map, tap } from'rxjs/operators';
@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.startLoadingFor(request.url);
    return next.handle(request).pipe(
      map((event:HttpEvent<any>)=>{
        if(event instanceof HttpResponse ){
          this.loaderService.stopLoadingFor(request.url);
        }
        return event
      })
    );
  }
}
