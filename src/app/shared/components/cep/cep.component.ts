import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  objCep:Object;
  constructor(public cepService:CepService) { }

  ngOnInit() {
    
  }

  saidaDoComponenteBusca(cepDigitado){
    this.cepService.buscaCep(cepDigitado)
      .subscribe((respostaQueVeioDaApi:any) => {
      console.log(respostaQueVeioDaApi._body);
      this.objCep = JSON.parse(respostaQueVeioDaApi._body);
  });
  }

}
