import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
       path:'login',
       loadChildren: async()=> (await import('./modules/login/login.module')).LoginModule 
    },
    {
       path:'home',
       loadChildren: async()=> (await import('./modules/home/home.module')).HomeModule,
    },
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutes { }
