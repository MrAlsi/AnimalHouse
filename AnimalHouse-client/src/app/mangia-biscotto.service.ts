import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decoded from 'jwt-decode';

//servizio per capire se l'utente sia un admin o un utente normale

@Injectable({
  providedIn: 'root'
})
export class MangiaBiscottoService {
  cookie?: any; //coockie decodificato
  ruolo?: any; //variabile dove viene salvato il decode del cookie dove c'era il ruolo
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
