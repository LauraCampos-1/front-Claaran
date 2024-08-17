import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url:any = "http://18.191.5.103:4003/api"
  constructor(private http:HttpClient){}

  postRegister( newRegister:any){
      return this.http.post<any>(`${this.url}/auth/register`, newRegister)
  }
}