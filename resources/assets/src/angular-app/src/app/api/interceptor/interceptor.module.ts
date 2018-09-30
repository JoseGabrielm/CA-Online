
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/services/login.service';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.meta.getTag('name=csrf-token').content;
    let token2 = 'NOT FOUND';
    //if (localStorage.getItem('token')) {

    if (this.authService.isLoggedIn()) {
      token2 = 'Bearer ' + localStorage.getItem('token');
    }

    const dupReq = req.clone({

      headers: req.headers.set('X-Csrf-Token', token).
        set('Authorization', token2)

    });
    return next.handle(dupReq).
      pipe(
        tap(event => {
          if (event instanceof HttpResponse) {

          }
        }, error => {
          // http response status code

          switch (error.status) {
            case 401:

              localStorage.removeItem('token');
              this.authService.isLoggedIn();
              this.router.navigate(['/session-end']);
              break;
            default: break;
          }


        })
      );
  }

  constructor(private meta: Meta,
    private router: Router,
    private authService: LoginService) {

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