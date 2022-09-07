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
  datiQuiz: any = [];
  datiMemoryFacile: any = [];
  datiMemoryMedio: any = [];
  datiMemoryDifficile: any = [];

  profilo(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }

    this.ruolo=this.biscotto.getRuolo();

    if(this.biscotto.getUsername()==this.profile){ //controllo se è il mio profilo
      this.sonoio= true;
    }
    //dato l'user prendo i dati
    console.log("Profile", this.profile, this.biscotto.getUsername());
    this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.profile)
      .subscribe(data=>{
        if(data!==null){
          this.dati=data;
          this.idProfile=data._id;

          //Per prendere tutte le informazioni dei giochi per passarli al component delle classifiche
          this.datiQuiz = this.dati.quiz;
          this.datiMemoryFacile = this.dati.memory_facile;
          this.datiMemoryMedio = this.dati.memory_medio;
          this.datiMemoryDifficile = this.dati.memory_difficile;

          this.http.get<any>('http://localhost:3000/CRUD/animaliPreferiti/'+ this.idProfile)
            .subscribe(data => {
              if(data!== null){
                this.animali=data.preferiti;
              }
            });
        }
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
    //vado eliminare dal db l'utente con quel id
    this.http.delete<any>('http://localhost:3000/CRUD/utenti/'+this.id)
      .subscribe(data => {
        //console.log(data);
      });

    //vado ad eliminare dal db gli appuntamenti di quell'user
    this.http.delete<any>('http://localhost:3000/appuntamenti/'+this.profile)
    .subscribe(data => {
      //console.log(data);
    });

    //vado ad eliminare le recensioni dell'utente
    this.http.delete<any>('http://localhost:3000/professionista/recensioni/utente/'+this.profile)
    .subscribe(data => {
      //console.log(data);
    });

    //vado ad eliminare i post dell'utente
    this.http.delete<any>('http://localhost:3000/post/'+this.profile)
    .subscribe(data => {
      //console.log(data);
    });

    //vado ad eliminare le preferenze dell'utente
    this.http.delete<any>('http://localhost:3000/preferenze/'+this.id)
    .subscribe(data => {
      //console.log(data);
    });

    this.router.navigate(['']);
  }

}
