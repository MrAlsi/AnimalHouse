import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { ProfiloServiceService } from '../profilo-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ruolo?: string;
  constructor(public biscotto: MangiaBiscottoService, public profilo: ProfiloServiceService) { }

  ngOnInit(): void {
    this.ruolo=this.biscotto.getRuolo();
  }

}
