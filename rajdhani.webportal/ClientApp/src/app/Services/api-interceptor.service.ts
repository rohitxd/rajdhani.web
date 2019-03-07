import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpInterceptor } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
//import { environment } from '../../../environments/environment';
//import { AuthenticationService } from './authentication.service';

@Injectable()
export class ApiInterceptorService {

  constructor(private injector: Injector, private router: Router/*, private auth: AuthenticationService*/) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //if (this.auth.isAuthenticated()) {
    //  var token = this.auth.getAuthToken();
    //  if (token) {
    //    const cloned = req.clone({
    //      headers: req.headers.set("Authorization", "Bearer " + token)
    //    });
    //    return next.handle(cloned);
    //  }
    //}
    return next.handle(req);
  }
}
