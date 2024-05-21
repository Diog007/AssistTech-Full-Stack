import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Credenciais } from '../../models/credenciais';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ToastrModule 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  //toastr
  constructor(private toastr:ToastrService){}

  showsuccess(){
    this.toastr.success("Login Successfully!.", 'Success!');
  }

  logar(){
    this.toastr.error("Usuario ou Senha Invalida!.", 'Login');
    this.creds.senha = '';

  }
  //toastr


  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(3))

  validaCampos(): boolean {
    if(this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }
  

}
