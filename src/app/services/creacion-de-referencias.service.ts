import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CreacionDeReferenciasService {
  private url:any = "http://http://18.117.237.108:4003/api"
  constructor(private http: HttpClient) { }

  sendDataClient(data:any){
    return this.http.post<any>(`${this.url}`,data  )
  }
  postRegister( newReference:any){
    return this.http.post<any>(`${this.url}`, newReference)
  }

  getProductByRef(arancelId: string) {
    return this.http.get<any>(`${this.url}/products/paid/${arancelId}`)
  }

  updateProductByRef( ref: string, updatedProduct: any ) {
    return this.http.patch( `${this.url}/products/reference/${ref}`, updatedProduct )
  }


}
