import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/data/interfaces/contact';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  data: IContact[] = [];
  display: boolean = false;
  displayedColumns: string[] = [
    "contacto",
    "correo",
    "empresa",
    "observaciones",
    "referencia",
    "telefono",
  ];
  constructor(private dataSrv: AuthService) {}

  ngOnInit(): void {
    this.getContact();
  }

  async getContact() {
    this.dataSrv.getData().subscribe((resp) => {
      this.data = resp;
      this.display = true
    });
  }
}
