import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from 'app/services/auth.service';
import { EstoqueComponent } from './estoque/estoque.component';
import { ExpedicaoComponent } from './expedicao/expedicao.component';

const estoqueRoutes: Routes = [
  { path: 'estoque/:params', component: EstoqueComponent, canActivate: [AuthService] },
  { path: 'estoque', component: EstoqueComponent, canActivate: [AuthService] },
  { path: 'expedicao/:params', component: ExpedicaoComponent, canActivate: [AuthService] },
  { path: 'expedicao', component: ExpedicaoComponent, canActivate: [AuthService] },
];

@NgModule({
  imports: [RouterModule.forChild(estoqueRoutes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule {}
