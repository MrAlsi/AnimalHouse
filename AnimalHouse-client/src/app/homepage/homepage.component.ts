import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MangiaBiscottoService } from '../mangia-biscotto.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public biscotto: MangiaBiscottoService) { }

  ngOnInit(): void {
    this.biscotto.getRuolo();
  }

}
