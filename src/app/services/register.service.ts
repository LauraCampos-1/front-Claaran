import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url:any = "http://http://18.117.237.108:4003/api"
  constructor(private http:HttpClient){}

  postRegister( newRegister:any){
      return this.http.post<any>(`${this.url}`, newRegister)
  }
}