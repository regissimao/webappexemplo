import { Component } from '@angular/core';
import { ListarUsuariosComponent } from '../listar-usuarios/listar-usuarios.component';
import { IncluirUsuarioComponent } from '../incluir-usuario/incluir-usuario.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ListarUsuariosComponent,
    IncluirUsuarioComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
