import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:any = "http://18.191.5.103:4003/api"
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  postLogin(newLogin: any){
    return this.http.post<any>(`${this.url}/auth/login/`,newLogin)
      .pipe(  
        tap( response => {
          console.log( ':::', response, ':::' );

          if( response.ok ) {
            this.router.navigateByUrl( '/admin/creacion-referencias' )
          }
          
        })
      )
  }
}
