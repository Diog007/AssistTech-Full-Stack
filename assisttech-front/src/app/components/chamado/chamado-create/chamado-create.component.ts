import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Cliente } from '../../../models/cliente';
import { Tecnico } from '../../../models/tecnicos';
import { ClienteService } from '../../../services/cliente.service';
import { TecnicoService } from '../../../services/tecnico.service';
import { ChamadoService } from '../../../services/chamado.service';
import { Chamado } from '../../../models/chamado';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chamado-create',
  standalone: true,
  imports: [ FormsModule, MatFormFieldModule,
     MatInputModule, MatSelectModule,
      MatButtonModule, ReactiveFormsModule, 
      CommonModule],
  templateUrl: './chamado-create.component.html',
  styleUrl: './chamado-create.component.css'
})
export class ChamadoCreateComponent implements OnInit{

  chamado: Chamado = {
    prioridade:  '',
    status:      '',
    titulo:      '',
    observacoes:   '',
    tecnico:     '',
    cliente:     '',
    nomeCliente: '',
    nomeTecnico: '',
  }

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []


  
  prioridade: FormControl = new FormControl(null, [Validators.required])
  status:     FormControl = new FormControl(null, [Validators.required])
  titulo:     FormControl = new FormControl(null, [Validators.required])
  observacoes:  FormControl = new FormControl(null, [Validators.required])
  tecnico:    FormControl = new FormControl(null, [Validators.required])
  cliente:    FormControl = new FormControl(null, [Validators.required])

  constructor(
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService,
    private toastService:   ToastrService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  create(): void {
    this.chamadoService.create(this.chamado).subscribe (resposta => {
      this.toastService.success('Chamado realizado com sucesso!', "Novo chamado");
      this.router.navigate(['chamados']);     
    }, ex => {
      console.log(ex);
      this.toastService.error(ex.error.error);
    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(respostaCliente => {
      this.clientes = respostaCliente;
    })
  }

  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe(respostaTecnico => {
      this.tecnicos = respostaTecnico;
    })
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid &&
      this.titulo.valid && this.observacoes.valid &&
      this.tecnico.valid && this.cliente.valid 
  }

}
