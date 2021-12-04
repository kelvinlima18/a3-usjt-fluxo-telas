import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AlunoComponent } from './alunos/aluno.component';
import { AlunoCadastroComponent } from './alunos/cadastro/cadastro.component';
import { EnsalamentoComponent } from './alunos/ensalamento/ensalamento.component';
import { TurmaComponent } from './alunos/turma/turma.component';
import { AtributoComponent } from './formularios/atributo/form-atributo.component';
import { FormularioComponent } from './formularios/formulario/form-formulario.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotaComponent } from './validar-form/nota/nota.component';
import { ValidarFormComponent } from './validar-form/validar-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'professor',
    component: HomeComponent
  },
  {
    path: 'formularios',
    component: FormulariosComponent,
    children: [
      {
        path: 'form',
        component: FormularioComponent
      },
      {
        path: 'atributo',
        component: AtributoComponent
      }
    ]
  },
  {
    path: 'alunos',
    component: AlunoComponent,
    children: [
      {
        path: 'cadastro',
        component: AlunoCadastroComponent
      },
      {
        path: 'turma',
        component: TurmaComponent
      },
      {
        path: 'ensalamento',
        component: EnsalamentoComponent
      }
    ]
  },
  {
    path: 'validar-form',
    component: ValidarFormComponent,
    children: [
      {
        path: 'nota',
        component: NotaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
