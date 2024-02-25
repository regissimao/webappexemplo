import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './../servicos/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  idUsuario: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.usuarioForm = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['']
    });
  }

  ngOnInit() {
    this.idUsuario = this.route.snapshot.paramMap.get('idUsuario');
    if (this.idUsuario) {
      this.recuperarUsuario(+this.idUsuario);
    }
  }

  recuperarUsuario(id: number) {
    // Simulação: substitua por uma chamada real ao serviço para obter os dados do usuário
    this.usuarioService.recuperarUsuario(id).subscribe(
      (usuario) => {
        this.usuarioForm.patchValue(usuario);
        this.usuarioForm.get('id')?.disable();
      },
      (erro) => {
        console.error('Erro ao recuperar usuários', erro);
      }
    );
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      //console.log('Formulário de Alteração de Usuário:', this.usuarioForm.value);

      this.usuarioForm.get('id')?.enable();
      this.usuarioService.alterarUsuario(this.usuarioForm.value).subscribe(
        () => {
          this.usuarioForm.get('id')?.disable();
          this.router.navigate(['/listar-usuarios']);
          console.log('Usuário enviado com sucesso');
        },
        (erro) => {
          this.usuarioForm.get('id')?.disable();
          console.error('Erro ao enviar usuário', erro);
        }
      )
    } else {
      console.error('Formulário inválido');
    }
  }
}

