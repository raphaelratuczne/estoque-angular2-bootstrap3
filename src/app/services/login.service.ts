import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private str: String;

  constructor() {
    this.str = 'string de teste';
  }

  public getTeste(): String {
    return this.str;
  }
}
