import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';



@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  postId: any; //id di ritorno da mongo
  url: string= "utenti"; //per indirizzare alla collection
  msgalert?: string;
  dati?: any;
  salvaGiochi = {
    quiz:[{ "0": {punteggio: 0, count: 0} },
      { "1": {punteggio: 0, count: 0} },
      { "2": {punteggio: 0, count: 0} },
      { "3": {punteggio: 0, count: 0} },
      { "4": {punteggio: 0, count: 0} },
      { "5": {punteggio: 0, count: 0} },
      { "6": {punteggio: 0, count: 0} },
      { "7": {punteggio: 0, count: 0} },
      { "8": {punteggio: 0, count: 0} },
      { "9": {punteggio: 0, count: 0} },
      { "10": {punteggio: 0, count: 0} }]

  }


  constructor(public fb: FormBuilder, private router: Router, public db: AggiungiDBService, public http: HttpClient, public cookieService: CookieService, public biscotto: MangiaBiscottoService) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "cognome": ['',Validators.required],
      "email": ['',Validators.required],
      "username": ['',Validators.required],
      "password": ['',Validators.required],
      "ruolo": ['utente'],
      //servono per tenere i punteggi dei giochi
      "quiz":[[{punteggio: 0, count: 0} ,
              {punteggio: 1, count: 0}, 
              {punteggio: 2, count: 0}, 
              {punteggio: 3, count: 0}, 
              {punteggio: 4, count: 0}, 
              {punteggio: 5, count: 0}, 
              {punteggio: 6, count: 0}, 
              {punteggio: 7, count: 0}, 
              {punteggio: 8, count: 0}, 
              {punteggio: 9, count: 0}, 
               {punteggio: 10, count: 0}]],
      "memory_facile": [[]],
      "memory_medio": [[]],
      "memory_difficile": [[]]

    });
    this.form2=fb.group({
      "confirmpassword": ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }


  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  controllaInput(): void{
    this.msgalert=('');
    //console.log(this.form);
    if(!this.form.valid || !this.form2.valid){
      this.msgalert=("Dati mancanti");
      //alert("Dati mancanti");
      return;
    }else{
      //controllo l'user non sia già in uso
     // console.log(this.form.value.username);
      this.http.put<any>('http://localhost:3000/controllaUsername', this.form.value)
      .subscribe(data => {
        if(data==null){ //se data è vuoto non è in uso
          //controllo la mail non sia già in uso
          this.http.put<any>('http://localhost:3000/controllaEmail', this.form.value)
          .subscribe(data1 => {
            if(data1==null){ //se data è vuoto non è in uso
              if(this.form.value.password==this.form2.value.confirmpassword){
                this.db.aggiungiDB(this.form.value, this.url);
                //Chiamata al db per salvare il token
                this.http.put<any>('http://localhost:3000/ricercaUtenti', {user: this.form.value.username, password: this.form.value.password})
                .subscribe(data => {
                //Se data non è null vuol dire che ha trovato una corrispondenza nel DB, data = al token che dobbiamo salvare
                  if(data!==null){
                    this.cookieService.set("token",data);// in questo punto sto salvando il token in data
                    this.biscotto.getRuolo(); //richiamo metodo per prendere il ruolo dal token
                    this.router.navigate(['preferenze']);
                  }
                  //console.log("DATAAAAAA:", data);
                });
              }else{
                this.msgalert=("le password non coincidono");
                //alert("le password non coincidono");
              }
            }else{
              this.msgalert=("mail: "+this.form.value.email+" è già in uso");
              //alert( "mail: "+this.form.value.email+" è già in uso")
            }
          });
        }else{
          this.msgalert=("username: "+this.form.value.username+" è già in uso");
          //alert( "username: "+this.form.value.username+" è già in uso")
          return;
        }
      });
    }
  }
}
