import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Credenciais } from '../../models/credenciais';
import {  ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import {  HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
     ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    {provide: ToastrService, useClass: ToastrService}
  ]
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
  }

  creds: Credenciais = {
    email: '',
    senha: ''
  };

  email = new FormControl(null, Validators.minLength(3))
  senha = new FormControl(null, Validators.minLength(3))

  

  constructor(private toast: ToastrService, private service: AuthService, private router: Router) { }

  logar() {
    this.service.authenticate(this.creds).pipe().subscribe(res => {
      let token = JSON.parse(JSON.stringify(res)).token
      this.service.successfulLogin(token, this.creds.email)
      this.router.navigate(['']);
      this.toast.success("Login realizado com sucesso!", "Login", { timeOut: 7000})
    }, ((err) => {
      console.log(err.status);
      if (err.status === 403) {
        this.toast.error('Acesso expirado ou login incorreto');
        //this.service.logout();
        this.router.navigate(['login']);
      }else{
        this.toast.error("Usuário e/ou senha inválidos")
      }
     })
    );
  }


  validaCampos(): boolean{
    return this.email.valid && this.senha.valid;
  }

}
