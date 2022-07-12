import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent implements OnInit {
  
  vuoto: string='';

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.set("token",this.vuoto);
  }

}
