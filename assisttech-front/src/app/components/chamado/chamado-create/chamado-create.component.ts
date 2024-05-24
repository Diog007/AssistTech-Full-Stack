import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-chamado-create',
  standalone: true,
  imports: [ FormsModule, MatFormFieldModule,
     MatInputModule, MatSelectModule,
      MatButtonModule, ReactiveFormsModule],
  templateUrl: './chamado-create.component.html',
  styleUrl: './chamado-create.component.css'
})
export class ChamadoCreateComponent implements OnInit{

  prioridade: FormControl = new FormControl(null, [Validators.required])
  status:   FormControl = new FormControl(null, [Validators.required])
  titulo:   FormControl = new FormControl(null, [Validators.required])
  descricao:  FormControl = new FormControl(null, [Validators.required])
  tecnico:    FormControl = new FormControl(null, [Validators.required])
  cliente:    FormControl = new FormControl(null, [Validators.required])

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid &&
      this.titulo.valid && this.descricao.valid &&
      this.tecnico.valid && this.cliente.valid 
  }

}
