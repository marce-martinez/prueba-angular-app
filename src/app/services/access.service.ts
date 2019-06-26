import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor( private http: HttpClient) { }

  postAccessData(url, documentoCifrado, nombre){
    let params = new HttpParams().set("documento", documentoCifrado).set("nombre", nombre);
    return this.http.post(url,"",{params});
  }
}
