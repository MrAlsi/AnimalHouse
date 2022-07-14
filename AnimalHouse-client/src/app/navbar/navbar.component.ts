import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ruolo?: string;
  id?: string;
  user?: string;
  constructor(public biscotto: MangiaBiscottoService, public http: HttpClient) { }

  ngOnInit(): void {
    this.id=this.biscotto.getId();
    this.ruolo=this.biscotto.getRuolo();
    this.http.get<any>('http://localhost:3000/CRUD/one/utenti/'+ this.id)
      .subscribe(data => {
        this.user=data.username;
      });

  }

}
