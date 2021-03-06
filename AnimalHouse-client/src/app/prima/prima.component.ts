import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { GuardiaIdService } from '../guardia.service';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent implements OnInit {
  
  vuoto: string='';

  constructor(private cookieService: CookieService ,public guardia: GuardiaIdService) { }

  ngOnInit(): void {
    this.cookieService.set("token",this.vuoto);
  }

}
