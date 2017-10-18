import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cep-busca',
  templateUrl: './cep-busca.component.html',
  styleUrls: ['./cep-busca.component.css']
})
export class CepBuscaComponent implements OnInit {

  @Output() cepDoInput:EventEmitter<string  | number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitirParaFora(cepQueDigiteiNaTela){
    this.cepDoInput.emit(cepQueDigiteiNaTela);
    console.log(cepQueDigiteiNaTela);
  }
}
