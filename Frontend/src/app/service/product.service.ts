import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllProduct():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8001/allProduct");
  }

  public searchProduct(search: any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8001/allProduct/${search}`);
  }

  public getByBrand(brand: any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8001/product/${brand}`);
  }

  public getByType(type: any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8001/Product/${type}`);
  }

  public getByPrice(price: any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8001/allproduct/${price}`);
  }

  public getById(id:any):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8001/productById/${id}`);
  }
}


