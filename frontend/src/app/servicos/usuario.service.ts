import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Usuario {
  id: number;
  nome: string;
  email: string;
  dataNascimento: Date;

  constructor(id: number = 0, nome: string = '', email: string = '', dataNascimento: Date = new Date()) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
  }
}

const SERVER_URL = environment.serverApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  recuperarUsuario(idUsuario: number) {
    return this.http.get<Usuario>(`${SERVER_URL}/usuario/${idUsuario}`);
  }

  recuperarUsuarios() {
    return this.http.get<Usuario[]>(`${SERVER_URL}/usuario/todos`);
  }

  incluirUsuario(usuario: Usuario) {
    return this.http.post<void>(`${SERVER_URL}/usuario`, usuario);
  }

  alterarUsuario(usuario: Usuario) {
    return this.http.put<void>(`${SERVER_URL}/usuario`, usuario);
  }

  removerUsuario(idUsuario: number) {
    return this.http.delete<Usuario>(`${SERVER_URL}/usuario/${idUsuario}`);
  }
}
