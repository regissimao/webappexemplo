
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MenuComponent } from './menu/menu.component';
import { IncluirUsuarioComponent } from './incluir-usuario/incluir-usuario.component';
import { LinhaUsuarioComponent } from './listar-usuarios/linha-usuario/linha-usuario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MenuComponent,
    ListarUsuariosComponent,
    IncluirUsuarioComponent,
    LinhaUsuarioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
