import { CepService } from './../../services/cep.service';
import { CepComponent } from './cep.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { CepResultComponent } from './cep-result/cep-result.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CepBuscaComponent,
    CepResultComponent,
    CepComponent
  ],
  exports:[
    CepComponent
  ],
  providers:[
    CepService
  ]
})
export class CepModule { }