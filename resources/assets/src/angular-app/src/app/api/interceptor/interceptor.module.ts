
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.meta.getTag('name=csrf-token').content;
    let token2 = 'NOT FOUND';
    if (localStorage.getItem('token')) {
       token2 = 'Bearer '+ localStorage.getItem('token');
    }

    const dupReq = req.clone({

      headers: req.headers.set('X-Csrf-Token', token).
                set('Authorization', token2)
              
    });
    return next.handle(dupReq);
  }

  constructor(private meta: Meta) {

  }
}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})


export class InterceptorModule {


}