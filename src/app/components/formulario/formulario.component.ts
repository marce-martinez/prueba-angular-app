import { Component, OnInit, ViewEncapsulation} from '@angular/core';   
import { PublicKeyService } from 'src/app/services/public-key.service';
import { AccessService } from 'src/app/services/access.service';

declare var publicKey: any;
declare const encriptarCampo: any;
const _url = 'http://localhost:8282';
const path_pk = '/api/publicKey';
const path_access = '/api/access'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioComponent implements OnInit {

  documentoCifrado='';
  mensaje = '';

  constructor(private publicKeyService: PublicKeyService, private accessService: AccessService) {
    
  }

  ngOnInit() {
    this.getPublicKey(_url + path_pk);
  }

  getPublicKey(url){
    this.publicKeyService.getPublicKey(url).subscribe(response =>{
      let resp = <any>response;
      publicKey = resp.publicKey;
      console.log('PublicKey obtenida: ', publicKey);
    });
  }

  register(form) {
    console.log(form.value);
    this.accessService.postAccessData(_url+path_access, form.value.documentoCifrado, form.value.nombre).subscribe(response =>{
      let resp = <any>response;
      this.mensaje = resp.message;
      console.log('Respuesta servicio de acceso: ', this.mensaje)
    })
  }

  modelChanged(){
    encriptarCampo('documento','documentoCifrado', 2);
    this.documentoCifrado = document.getElementById('documentoCifrado')['value'];    
  }

  clear(){
    this.mensaje='';
    document.getElementById('documento')['value']="";
    document.getElementById('nombre')['value']="";
    document.getElementById('documentoCifrado')['value']="";
    this.documentoCifrado = document.getElementById('documentoCifrado')['value'];  
  }
}
