import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { FormulariosComponent } from './formularios/formularios.component';
import { FormularioComponent } from './formularios/formulario/form-formulario.component';
import { AtributoComponent } from './formularios/atributo/form-atributo.component';
import { AlunoComponent } from './alunos/aluno.component';
import { ValidarFormComponent } from './validar-form/validar-form.component';
import { NotaComponent } from './validar-form/nota/nota.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormulariosComponent,
    FormularioComponent,
    AtributoComponent,
    AlunoComponent,
    ValidarFormComponent,
    NotaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
