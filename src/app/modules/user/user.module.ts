import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './components/list-user/list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { AddUserComponent } from './components/add-user/add-user.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ListUserComponent,
    AddUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class UserModule { }
