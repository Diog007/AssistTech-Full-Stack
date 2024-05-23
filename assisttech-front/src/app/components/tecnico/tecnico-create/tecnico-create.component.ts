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
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';



@Component({
  selector: 'app-tecnico-create',
  standalone: true,
  imports: [
    MatCardModule, MatPseudoCheckboxModule, FormsModule, MatRadioModule,
     MatCheckboxModule, MatFormFieldModule, MatFormFieldModule, MatButtonModule, 
     MatInputModule, MatIconModule, RouterLink, ReactiveFormsModule, NgxMaskDirective ],
  templateUrl: './tecnico-create.component.html',
  styleUrl: './tecnico-create.component.css',
  providers: [provideNgxMask()]
})
export class TecnicoCreateComponent implements OnInit {

  nome: FormControl = new FormControl(null, Validators.minLength(3))
  cpf: FormControl = new FormControl(null, Validators.required)
  email: FormControl = new FormControl(null, Validators.email)
  senha: FormControl = new FormControl(null, Validators.minLength(3))

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.cpf.valid 
    && this.email.valid && this.senha.valid
  }


}
