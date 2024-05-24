import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/cliente';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-cliente-create',
  standalone: true,
  imports: [
    MatCardModule, MatPseudoCheckboxModule, FormsModule, MatRadioModule,
     MatCheckboxModule, MatFormFieldModule, MatFormFieldModule, MatButtonModule, 
     MatInputModule, MatIconModule, RouterLink, ReactiveFormsModule, NgxMaskDirective ],
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css',
  providers: [provideNgxMask()]
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: ""
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3))
  cpf: FormControl = new FormControl(null, Validators.required)
  email: FormControl = new FormControl(null, Validators.email)
  senha: FormControl = new FormControl(null, Validators.minLength(3))

  constructor (private service: ClienteService, private toast: ToastrService, private router: Router ) { }

  ngOnInit(): void {  }

  create(): void {
    this.service.create(this.cliente).subscribe(() => {
      this.toast.success('Técnico cadastrado com sucesso!', 'Cadastro')
      this.router.navigate(['clientes'])
    }, ex => {
      console.log(ex);
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  addPerfil(perfil: any): void {
    if(this.cliente.perfis.includes(perfil)){
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
    }else {
      this.cliente.perfis.push(perfil);
    }
  }
  
  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid 
    && this.email.valid && this.senha.valid
  }
  
}
