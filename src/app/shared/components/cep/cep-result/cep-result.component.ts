import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cep-result',
  templateUrl: './cep-result.component.html',
  styleUrls: ['./cep-result.component.css']
})
export class CepResultComponent implements OnInit {


  @Input() cepObj:Object;
  
  constructor() { }

  ngOnInit() {
  }

}
