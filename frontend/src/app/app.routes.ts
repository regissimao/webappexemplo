import { Routes } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { IncluirUsuarioComponent } from './incluir-usuario/incluir-usuario.component';
import { AlterarUsuarioComponent } from './alterar-usuario/alterar-usuario.component';

export const routes: Routes = [
  {path: 'listar-usuarios', component: ListarUsuariosComponent},
  {path: 'incluir-usuario', component: IncluirUsuarioComponent},
  {path: 'alterar-usuario/:idUsuario', component: AlterarUsuarioComponent},
  {path: '', redirectTo: 'listar-usuarios', pathMatch: 'full'}
];
