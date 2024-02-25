import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../servicos/usuario.service';
import { LinhaUsuarioComponent } from './linha-usuario/linha-usuario.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    LinhaUsuarioComponent
  ],
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
    ) {}

  ngOnInit() {
    this.recuperarUsuarios();
  }

  recuperarUsuarios() {
    this.usuarioService.recuperarUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (erro) => {
        console.error('Erro ao recuperar usuários', erro);
      }
    );
  }

  removerUsuario(idUsuario: number) {
    this.usuarioService.removerUsuario(idUsuario)
    .pipe(finalize( () => this.recuperarUsuarios()))
    .subscribe(
      (erro) => {
        console.error('Erro ao remover usuário', erro);
      }
    );
  }
}
