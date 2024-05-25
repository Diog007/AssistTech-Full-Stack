import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Register } from '../../models/register';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  ngOnInit(): void {
  }

  register: Register = {
    nome: '',
    cpf: '',
    email: '',
    senha: ''
  }

  nome = new FormControl(null, Validators.minLength(3))
  cpf = new FormControl(null, Validators.minLength(3))
  email = new FormControl(null, Validators.minLength(3))
  senha = new FormControl(null, Validators.minLength(3))


  constructor(private toast: ToastrService, private service: AuthService, private router: Router) { }

  registers(): void {
    this.service.register(this.register).subscribe(() => {
      this.toast.success('Registrado com sucesso!', 'Registro')
      this.router.navigate(['login'])
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

  validaCampos(): boolean{
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }

}

