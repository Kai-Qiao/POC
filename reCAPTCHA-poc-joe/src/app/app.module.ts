import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { V3Component } from './components/reCAPTCHA/v3/v3.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module ,RECAPTCHA_BASE_URL } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    V3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecaptchaV3Module,
    HttpClientModule,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '//6LdCO-//EUAAAAACYP0jgwhCcKe4EtqoTKJOtOw58o//' },
    { provide: RECAPTCHA_BASE_URL, useValue: 'https://recaptcha.net/recaptcha/api.js' },//google.com Domestic network access is not available
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
