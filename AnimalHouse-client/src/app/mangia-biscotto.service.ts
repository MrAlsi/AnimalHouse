import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decoded from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class MangiaBiscottoService {
  cookie?: any;
  ruolo?: any;
  constructor(private cookieService: CookieService) { }

  getRuolo(): void{
    this.cookie=this.cookieService.get('token');
    this.cookie = jwt_decoded(this.cookie);
    console.log("token",this.cookie);

    if(this.cookie != null){
       this.ruolo=this.cookie.ruolo;
       console.log("ruolo:",this.cookie.ruolo);
    }
  }
}
