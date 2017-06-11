import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Usuario } from '../modules/login/usuario';

@Injectable()
export class AuthService implements CanActivate {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  autenticar(usuario: Usuario) {
    if (usuario.nome && usuario.senha) {
      this.usuarioAutenticado = true;
    } else {
      this.usuarioAutenticado = false;
    }
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {

    // if (this.usuarioAutenticado)
    //   return this.usuarioAutenticado;
    //
    // else {
    //   this.router.navigate(['login']);
    //   return this.usuarioAutenticado;
    // }
    return true;
  }
}
