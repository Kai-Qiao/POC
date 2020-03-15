import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V3Component } from './components/reCAPTCHA/v3/v3.component';


const routes: Routes = [
  {path:'poc/re-captcha',component: V3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
