import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { OnInit, ViewChild } from '@angular/core';
import { MatPaginator,  } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { Chamado } from '../../../models/chamado';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';





@Component({
  selector: 'app-chamado-list',
  standalone: true,
  imports: [
    MatPaginatorModule, MatFormFieldModule, MatButtonModule,
     MatInputModule, MatTableModule, RouterLink,
      MatCheckboxModule, MatRadioModule ],
  templateUrl: './chamado-list.component.html',
  styleUrl: './chamado-list.component.css'
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [
    {    
    id: 1,
    dataAbertura: '21/06/2021',
    dataFechamento: '21/06/2021',
    prioridade:'ALTA',
    status:'ANDAMENTO',
    titulo:'Chamado 1',
    descricao:'Teste chamado 1',
    tecnico: 1,
    cliente: 6,
    nomeCliente:'Valdir Cezar',
    nomeTecnico: 'Albert Einstein',
  }

  ]

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;




  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
