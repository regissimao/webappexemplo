import { FormsModule, NgForm } from '@angular/forms';
import { UsuarioService } from './../servicos/usuario.service';
import { Component } from '@angular/core';
import { Usuario } from '../servicos/usuario.service';

@Component({
  selector: 'app-incluir-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './incluir-usuario.component.html',
  styleUrl: './incluir-usuario.component.css'
})
export class IncluirUsuarioComponent {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuario = new Usuario();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const usuarioParaEnviar = form.value;

      this.usuarioService.incluirUsuario(usuarioParaEnviar).subscribe(
        () => {
          console.log('Usuário enviado com sucesso');
          form.reset();
        },
        (erro) => {
          console.error('Erro ao enviar usuário', erro);
        }
      );
    } else {
      console.error('Formulário inválido');
    }
  }
}
