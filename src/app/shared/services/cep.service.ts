import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CepService {

  private _url:string = 'https://viacep.com.br/ws/';
  constructor(public http:Http) { }

  buscaCep(cep:string | number){
    return this.http.get(`${this._url}${cep}/json/`);
  }
}
