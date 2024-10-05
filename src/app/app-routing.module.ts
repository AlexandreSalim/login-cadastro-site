import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SiteComponent } from './site/site.component';

const routes: Routes = [
  { path: '', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'site', component: SiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
