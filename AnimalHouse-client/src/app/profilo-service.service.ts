import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MangiaBiscottoService } from './mangia-biscotto.service';
import {ActivatedRoute} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ProfiloServiceService {
  
  constructor (private router: Router, public http: HttpClient, public biscotto: MangiaBiscottoService, public route: ActivatedRoute) {}
  
  //variabili per gestire la visualizzazioni delle card nel profilo
  selectedDati: boolean=true;
  selectedElimina: boolean=false;
  selectedReset: boolean=false;
  selectedNewPassword: boolean= false;

  id?: string;
  myUser?:string;
  profile?: any;
  dati?: any;
  animali?: any[]=[];
  idProfile?: string;
  sonoio?: boolean= false;
  ruolo?: string;


  profilo(): void {
    try{
      this.id=this.biscotto.getId();
      console.log("idwe", this.id);
    }catch (error) {
      this.id='';
      console.log("idciao", this.id);
    }
    this.ruolo=this.biscotto.getRuolo();
    this.http.get<any>('http://localhost:3000/CRUD/one/utenti/'+ this.id)
      .subscribe(data => {
        this.myUser=data.username;
        if(this.myUser==this.profile){ //controllo se è il mio profilo
          this.sonoio= true;
        }
          //dato l'user prendo i dati
          this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.profile)
            .subscribe(data=>{
              if(data!==null){
                this.dati=data;
                this.idProfile=data._id;
                console.log("id",this.idProfile);      
                this.http.get<any>('http://localhost:3000/CRUD/animaliPreferiti/'+ this.idProfile)
                  .subscribe(data => {
                    if(data!== null){
                      this.animali=data.preferiti;
                      console.log(this.animali);
                    }
                  });
              }
            });
      });    
  }

  showElimina() :void{
    this.selectedElimina=true;
    this.selectedDati=false;
    this.selectedReset=false;
    this.selectedNewPassword= false;

  }

  close(): void{
    this.selectedElimina=false;
    this.selectedNewPassword= false;

  }

  reset(): void{
    this.selectedReset=true;
    this.selectedDati=false;
    this.selectedNewPassword= false;
  }


  eliminaAccount(): void{
    this.id=this.biscotto.getId();
    console.log("id:", this.id);
    this.http.delete<any>('http://localhost:3000/CRUD/utenti/'+this.id)
      .subscribe(data => {
        //this.collezioni=data;
        console.log(data);
        this.router.navigate(['']);
      });
      
  }

}
