import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Tecnico } from '../../../models/tecnicos';

@Component({
  selector: 'app-tecnico-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './tecnico-list.component.html',
  styleUrl: './tecnico-list.component.css'
})
export class TecnicoListComponent {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Diogo Nascimento',
      cpf: '123.456.789-10',
      email: 'diogo.mz@gmail.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '20/05/2024'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


