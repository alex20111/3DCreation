import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { environment } from '@environments/environment';

import { AuthService } from '../services/auth.service';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//     constructor(private authService: AuthService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         console.log("JwTInterceptor");
//         // add auth header with jwt if user is logged in and request is to the api url
//         const user = this.authService.userValue;
//         const isLoggedIn = user?.token; 
//         // const isApiUrl = request.url.startsWith(environment.apiUrl);
//         // if (isLoggedIn && isApiUrl) {
//             if (isLoggedIn ) {
//             request = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${user.token}`
//                 }
//             });
//         }

//         return next.handle(request);
//     }
// }

      
export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log("JwTInterceptor");
    const user = inject(AuthService).userValue;
    const isLoggedIn = user?.token; 
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    // if (isLoggedIn && isApiUrl) {
        if (isLoggedIn ) {
            req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${user.token}`
            }
        });
    }
    return next(req);
  }
  
      