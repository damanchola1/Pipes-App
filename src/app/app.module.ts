import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuracion del idioma

import localeEsCo from '@angular/common/locales/es-CO'
import localeEsFr from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEsCo)
registerLocaleData(localeEsFr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CO'
  }],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ]
})
export class AppModule { }
