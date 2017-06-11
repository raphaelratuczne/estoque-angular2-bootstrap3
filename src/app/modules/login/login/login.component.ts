import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'app/services/login.service';
import { AuthService } from 'app/services/auth.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  public teste: String;

  constructor(private loginSrvc:LoginService,
              private authSrvc: AuthService,
              private router: Router
    ) {}

  ngOnInit() {
    this.teste = this.loginSrvc.getTeste();
  }

  login() {
    this.usuario.nome = 'Nome';
    this.usuario.senha = 'senha';

    this.authSrvc.autenticar(this.usuario);

    this.router.navigate(['estoque']);
  }
}
