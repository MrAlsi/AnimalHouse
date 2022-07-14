import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { MangiaBiscottoService } from './mangia-biscotto.service';

@Injectable({
  providedIn: 'root'
})

export class GuardiaIdService implements CanActivate {

  id?:string;

  constructor(private _router:Router, public biscotto: MangiaBiscottoService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
    console.log("id",this.id);
    //controllo abbia un id
    if(this.id!=''){
      return true;
    }else{
      this.router.navigate(['']);
      alert("devi loggarti o registrarti per poter visualizzare questa pagina")
      return false;
    }
  }
}
