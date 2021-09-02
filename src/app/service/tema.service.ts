import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
   // return this.http.post<UsuarioLogin>('https://laissblog.herokuapp.com/usuarios/logar', usuarioLogin)
  //}

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://laissblog.herokuapp.com/tema', this.token)

  }

  postTema(temaCadastro: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://laissblog.herokuapp.com/tema', temaCadastro, this.token)
  }



}