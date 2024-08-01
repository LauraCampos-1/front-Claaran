import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CreacionDeReferenciasService {

  constructor(private http: HttpClient) { }

  sendDataClient(data:any){
    return this.http.post<any>(`http://localhost:3001/api/products`,data  )
  }
  postRegister( newReference:any){
    return this.http.post<any>('http://localhost:3001/api/products', newReference)
  }

  getProductByRef(arancelId: string) {
    return this.http.get<any>(`http://localhost:3001/api/products/paid/${arancelId}`)
  }

  updateProductByRef( ref: string, updatedProduct: any ) {
    return this.http.patch( `http://localhost:3001/api/products/reference/${ref}`, updatedProduct )
  }


}
