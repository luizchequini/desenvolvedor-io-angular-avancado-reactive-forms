import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from './model/usuario';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS; 

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {}

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: 'O campo Nome é requirido!',
        minlength: 'O campo Nome deve ter no mínimo 2 caracteres!',
        maxlength: 'O campo Nome deve ter no máximo 150 caracteres!'
      },
      cpf: {
        required: 'O campo CPF é requirido!',
        cpf: 'CFP em formato invalido'
      },
      email: {
        required: 'O campo Email é requirido!',
        email: 'Email em formato invalido'
      },
      senha: {
        required: 'O campo Senha é requirido!',
        rangeLength: 'O campo Senha deve ter entre 6 e 15 caracteres!'
      },
      confirmarsenha: {
        required: 'O campo Senha é requirido!',
        rangeLength: 'O campo Senha deve ter entre 6 e 15 caracteres!',
        equalTo: 'As senhas não conferem!'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

   }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  ngOnInit(): void {

    let _senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let _confirmarsenha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(_senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
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
