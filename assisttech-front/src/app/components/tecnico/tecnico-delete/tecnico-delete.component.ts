import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { TecnicoService } from '../../../services/tecnico.service';
import { Tecnico } from '../../../models/tecnicos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tecnico-delete',
  standalone: true,
  imports: [MatCardModule, MatPseudoCheckboxModule, FormsModule, MatRadioModule,
    MatCheckboxModule, MatFormFieldModule, MatFormFieldModule, MatButtonModule, 
    MatInputModule, MatIconModule, RouterLink, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './tecnico-delete.component.html',
  styleUrl: './tecnico-delete.component.css'
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico: Tecnico = {
    id: "",
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: [],
    dataCriacao: ""
  }

  constructor (
    private service: TecnicoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute 
         
    ) { }

  ngOnInit(): void { 
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }

  findById(): void {
    this.service.findById(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta;
    })
  }



  delete(): void {
    this.service.delete(this.tecnico.id).subscribe(() => {
      this.toast.success('Técnico deletado com sucesso!', 'Delete')
      this.router.navigate(['tecnicos'])
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

}