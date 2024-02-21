
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MenuComponent } from './menu/menu.component';
import { IncluirUsuarioComponent } from './incluir-usuario/incluir-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet,
    MenuComponent,
    ListarUsuariosComponent,
    IncluirUsuarioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
