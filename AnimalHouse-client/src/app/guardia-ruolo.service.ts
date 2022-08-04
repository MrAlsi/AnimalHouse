import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { MangiaBiscottoService } from './mangia-biscotto.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaRuoloService {

  ruolo?: string;

  constructor(private _router:Router, public biscotto: MangiaBiscottoService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    try{
      this.ruolo=this.biscotto.getRuolo();
    }catch (error) {
      this.ruolo='';
    }

    //console.log("ruolo",this.ruolo);
    if(this.ruolo=='admin'){
      return true;
    }else{
      this.router.navigate(['**']);
      return false;
    }
  }
}
