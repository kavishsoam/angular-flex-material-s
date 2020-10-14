import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients = [
    {
      name: 'nana',
      mobile: '+91 9898989800',
      email: 'nana@gmail.com',
      gender: 'male',
      points: 234,
      intakeFrom: 1,
      sopeNote: 4
    },
    {
      name: 'riya',
      mobile: '+91 9098989800',
      email: 'riya@gmail.com',
      gender: 'female',
      points: 554,
      intakeFrom: 15,
      sopeNote: 4
    },
    {
      name: 'Riya',
      mobile: '+91 9898989800',
      email: 'riya1@gmail.com',
      gender: 'female',
      points: 239,
      intakeFrom: 1,
      sopeNote: 4
    },
    {
      name: 'swet',
      mobile: '+91 7898989800',
      email: 'swet@gmail.com',
      gender: 'female',
      points: 334,
      intakeFrom: 1,
      sopeNote: 0
    },
    {
      name: 'newuser',
      mobile: '+91 8898989800',
      email: 'nana@gmail.com',
      gender: 'male',
      points: 274,
      intakeFrom: 1,
      sopeNote: 0
    },
    {
      name: 'newuser',
      mobile: '+91 8898989800',
      email: 'nana@gmail.com',
      gender: 'male',
      points: 274,
      intakeFrom: 1,
      sopeNote: 0
    },
  ];

  displayedColumns: string[] = ['name', 'mobile', 'email', 'gender', 'points', 'intakeFrom', 'sopeNote'];
  dataSource = new MatTableDataSource(this.clients);
  @ViewChild(MatSort) sortTable: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sortTable;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
