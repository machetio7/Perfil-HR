import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {
  @Input() headers : Array<string> = [];
  @Input() elementData : Array<any> = [];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { 
  }

  ngAfterContentInit(): void {
      this.displayedColumns = this.headers;
      this.dataSource = new MatTableDataSource(this.elementData);
      console.log(this.headers)
  }

  ngOnInit(): void {
  }


}
