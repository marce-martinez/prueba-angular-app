import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicKeyService {

  constructor( private http:HttpClient) { }

  getPublicKey(url){
    return this.http.get(url);
  }
}
