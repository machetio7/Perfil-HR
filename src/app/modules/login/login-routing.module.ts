import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
