import { CepModule } from './shared/components/cep/cep.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CepComponent } from './shared/components/cep/cep.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    CepModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
