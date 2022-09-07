import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decoded from 'jwt-decode';

//servizio per prendere dal token l'id l'user e il ruolo

@Injectable({
  providedIn: 'root'
})
export class MangiaBiscottoService {
  cookie?: any; //coockie decodificato
  ruolo?: any; //variabile dove viene salvato il decode del cookie dove c'era il ruolo
  id?: any; //variabile dove viene salvato il decode del cookie dove c'era l'id
  constructor(private cookieService: CookieService) { }

  //metodo per prendere il ruolo dal token
  getRuolo(): any{
    this.cookie=this.cookieService.get('token');
    this.cookie = jwt_decoded(this.cookie);
    
    if(this.cookie != null){
       return this.cookie.ruolo;
    }

    return null;
  }


  //metodo per prendere l'id dal token
  getId(): string{
    this.cookie=this.cookieService.get('token');
    this.cookie = jwt_decoded(this.cookie);

    if(this.cookie != null){
       this.id=this.cookie.id;
       return this.cookie.id;
    }else{
      return "";
    }
    
  }


  //metodo per prendere l'user
  getUsername(): string{
    this.cookie=this.cookieService.get('token');
    this.cookie = jwt_decoded(this.cookie);
    if(this.cookie != null){
      return this.cookie.username;     
    }else{
      return "";
    }
    
  }
}
