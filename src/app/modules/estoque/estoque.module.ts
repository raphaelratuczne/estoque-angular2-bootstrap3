import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueComponent } from './estoque/estoque.component';
import { ExpedicaoComponent } from './expedicao/expedicao.component';
import { EstoqueRoutingModule } from './estoque.routing.module';

@NgModule({
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ],
  declarations: [
    EstoqueComponent,
    ExpedicaoComponent
  ]
})
export class EstoqueModule { }
