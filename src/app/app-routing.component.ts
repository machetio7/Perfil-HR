import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
       path:'',
       loadChildren: async()=> (await import('./modules/login/login.module')).LoginModule 
    },
    {
        path:'**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutes { }
