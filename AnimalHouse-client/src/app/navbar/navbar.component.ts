import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ruolo?: string;
  constructor(public biscotto: MangiaBiscottoService) { }

  ngOnInit(): void {
    this.ruolo=this.biscotto.getRuolo();
  }

}
