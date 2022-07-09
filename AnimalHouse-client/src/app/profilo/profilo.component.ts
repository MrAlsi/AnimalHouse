import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';
import { CookieService } from 'ngx-cookie-service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  postId: any;

  constructor(public profilo: ProfiloServiceService, public http: HttpClient, private cookieService: CookieService, public biscotto: MangiaBiscottoService) { }

  ngOnInit(): void {
    this.biscotto.getRuolo();
  }



}
