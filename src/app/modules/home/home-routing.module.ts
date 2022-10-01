import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { skeletonComponent } from './pages/skeleton.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path:'',
    component: skeletonComponent,
    canActivate: [AngularFireAuthGuard],
    data:{ authGuardPipe: redirectUnauthorizedToLogin},
    children:[
      {
        path: 'user',
        loadChildren: async()=> (await import('../user/user.module')).UserModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
