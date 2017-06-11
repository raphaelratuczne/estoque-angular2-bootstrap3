import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { LoginRoutingModule } from './login.routing.module';
import { LoginService } from 'app/services/login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent,
    EsqueciSenhaComponent,
  ],
  declarations: [
    LoginComponent,
    EsqueciSenhaComponent,
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
