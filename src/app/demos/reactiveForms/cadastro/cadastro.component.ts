import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from './model/usuario';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    let _senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let _confirmarsenha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(_senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: _senha,
      confirmarsenha: _confirmarsenha
    });
  }

  adicionarUsuario(){
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
  }

}
