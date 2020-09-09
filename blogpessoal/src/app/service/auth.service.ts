import { UserLogin }  from 'src/app/model/UserLogin'
import { User } from 'src/app/model/User'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar (userlogin: UserLogin){
    return this.http.post('http://192.168.1.5:9000/usuarios/logar', userlogin)
  }

  cadastrar(user: User){
    return this.http.post('http://192.168.1.5:9000/usuarios/cadastrar', user)
  }
  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if (token != null) {
      ok = true
    }

    return ok
  }

  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')

    if (token == null) {
      ok = true
    }

    return ok
  }
}
