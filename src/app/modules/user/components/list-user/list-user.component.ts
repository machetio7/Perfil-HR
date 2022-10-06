import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/data/interfaces/contact';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  data: IContact[] = [];
  display: boolean = false;
  displayedColumns: string[] = [
    "no",
    "contacto",
    "correo",
    "empresa",
    "observaciones",
    "referencia",
    "telefono",
    "acciones"
  ];
  constructor(private dataSrv: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getContact();
  }

  openDialog() {
    this.dialog.open(AddUserComponent);
  }
  async getContact() {
    console.warn('testing')
    this.dataSrv.getData().subscribe((resp) => {
      this.data = resp;
      this.display = true
      this.data.forEach((element, index)=>{
        element.no = index + 1 ;
        element.acciones = ['edit','delete','shared'] 
      })
      console.log(this.data)
    });
  }
}

