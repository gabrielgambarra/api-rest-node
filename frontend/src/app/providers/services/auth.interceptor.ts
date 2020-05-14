import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  requestCount = 0;

  constructor(
    private loadService: LoaderService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.requestCount++;
    const token: string = localStorage.getItem('token');
    this.loadService.show();

    if (token) {
      req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          this.requestCount--;
          if (this.requestCount < 1) {
            this.loadService.hide();
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {

        this.requestCount--;

        if (this.requestCount < 1) {
          this.loadService.hide();
        }
        const err = error.error.message || error.statusText;
        return throwError(error);
      })
    );
  }
}
