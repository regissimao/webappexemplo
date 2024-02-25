import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Usuario } from '../../servicos/usuario.service';

@Component({
  selector: 'app-linha-usuario',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './linha-usuario.component.html',
  styleUrl: './linha-usuario.component.css'
})
export class LinhaUsuarioComponent {
  @Input() usuario: Usuario;
  @Output() excluirUsuario = new EventEmitter<number>();

  constructor(
    private route: ActivatedRoute
  ) {
    this.usuario = new Usuario();
  }

  removerUsuario() {
    this.excluirUsuario.next(this.usuario.id);
  }
}
