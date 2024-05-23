import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Tecnico } from '../../../models/tecnicos';
import { TecnicoService } from '../../../services/tecnico.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-tecnico-list',
  standalone: true,
  imports: [ MatPaginatorModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule],
  templateUrl: './tecnico-list.component.html',
  styleUrl: './tecnico-list.component.css'
})
export class TecnicoListComponent implements OnInit {

  ngOnInit(): void {
    this.findAll();
  }

  ELEMENT_DATA: Tecnico[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor (private service: TecnicoService) { }

  findAll () {
    this.service.findAll().pipe().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Tecnico>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


