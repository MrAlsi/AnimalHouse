//servizio che blocca l'accesso alla pagina che lo implementa se non si è registrati

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { MangiaBiscottoService } from './mangia-biscotto.service';

@Injectable({
  providedIn: 'root'
})

export class GuardiaIdService implements CanActivate {

  msgalert?: string;
  id?:string;

  constructor(private _router:Router, public biscotto: MangiaBiscottoService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.msgalert='';
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
    //controllo abbia un id
    if(this.id!=''){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
}
