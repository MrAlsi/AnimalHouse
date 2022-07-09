import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';

@Component({
  selector: 'app-classifiche',
  templateUrl: './classifiche.component.html',
  styleUrls: ['./classifiche.component.css']
})
export class ClassificheComponent implements OnInit {

  constructor(public biscotto: MangiaBiscottoService) { }

  ngOnInit(): void {
    this.biscotto.getRuolo();
  }

}
