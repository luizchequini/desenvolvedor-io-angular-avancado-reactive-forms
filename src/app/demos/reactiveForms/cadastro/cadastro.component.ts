import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      confirmarsenha: ['']
    });
  }

  adicionarUsuario(){
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }

}
