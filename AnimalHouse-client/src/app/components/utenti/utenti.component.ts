//component che permette di viasualizzare l'elenco di tutte le persone registrate

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MangiaBiscottoService } from '../../services/mangia-biscotto.service';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
   
  collezioni?: any[]=[];
  collezione?: any;
  form: FormGroup;
  search: boolean= false;
  ruolo?: string;
  msgalert?: string;
  profile?: any; //nome dell'utente che eliminerò


  constructor(public http: HttpClient, public fb: FormBuilder, public biscotto: MangiaBiscottoService) {
    this.form=fb.group({
      "cerca": [""],
    });
   }

  ngOnInit(): void {
    this.cercatutti();
    //prendo il ruolo perché se sono admin posso visualizzare dei bottoni in più
    this.ruolo=this.biscotto.getRuolo();
  }

  elimina(id: string): void{

    this.http.get<any>('http://localhost:3000/CRUD/one/utenti/'+id)
      .subscribe(data => {
        this.profile=data.username; //prendo il nome per poter fare le altre operazioni sul db
      }); 

    this.http.delete<any>('http://localhost:3000/CRUD/utenti/'+ id)
    .subscribe(data => {
      this.collezioni=data;
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
    window.location.reload();
  }

  cerca(): void{
    this.msgalert=('');
    if(this.form.value.cerca!=""){
      //chiamata al db per trovare l'utente con quell'user
      this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.form.value.cerca)
        .subscribe(data=>{
          if(data!==null){
            this.search=true;
            this.collezione=data;
          }else{
            this.msgalert=("Ci dispiace, l'utente cercato non esiste");
          }
        });
    }else{
      this.search=false;
      this.cercatutti();
    }
  }

  cercatutti(): void{
    this.http.get<any>('http://localhost:3000/CRUD/utenti/')
        .subscribe(data => {
          this.collezioni=data;
        });
    this.search=false;
  }
}
