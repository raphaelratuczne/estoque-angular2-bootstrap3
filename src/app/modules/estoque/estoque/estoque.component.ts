import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit, OnDestroy {

  params: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe( params => {
      if ( Object.keys(params).length > 0 && typeof(params['params']) !== undefined ) {
        this.params = params['params'];
        console.log(this.params);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  selectAll(event): void {
    event.target.select();
  }
}
