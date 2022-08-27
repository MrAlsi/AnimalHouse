import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';


@Component({
  selector: 'app-registrazione-admin',
  templateUrl: './registrazione-admin.component.html',
  styleUrls: ['./registrazione-admin.component.css']
})
export class RegistrazioneAdminComponent implements OnInit {
  codiceAdmin= "1111";
  form: FormGroup;
  form2: FormGroup; //per prendere confirmpassword senza salvarlo nel db
  postId: any; //id di ritorno da mongo
  url: string= "utenti"; //per indirizzare alla collection
  msgalert?: string;

  constructor(public fb: FormBuilder, private router: Router, public db: AggiungiDBService, public http: HttpClient, private cookieService: CookieService, public biscotto: MangiaBiscottoService) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "cognome": ['',Validators.required],
      "email": ['',Validators.required],
      "username": ['',Validators.required],
      "password": ['',Validators.required],
      "ruolo": ['admin'],
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
    this.form2= fb.group({
      "confirmpassword": ['',Validators.required],
      "codice": ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  controllaInput(): void{
    this.msgalert=('');
    if(!this.form.valid || !this.form2.valid){
      this.msgalert=("Dati mancanti");
      //alert("Dati mancanti");
      return;
    }else{
      if(this.form2.value.codice!=this.codiceAdmin){
        this.msgalert=("codice amministratore errato");
        //alert("codice amministratore errato");
      }else{
        //controllo l'user non sia già in uso
        //console.log(this.form.value.username);
        this.http.put<any>('http://localhost:3000/controllaUsername', this.form.value)
        .subscribe(data => {
          if(data==null){ //se data è vuoto non è in uso
            //controllo la mail non sia già in uso
            this.http.put<any>('http://localhost:3000/controllaEmail', this.form.value)
            .subscribe(data1 => {
              if(data1==null){ //se data è vuoto non è in uso
                if(this.form.value.password==this.form2.value.confirmpassword){
                  //salvo sul db il nuovo admin
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
                    });
                }else{
                  this.msgalert=("le password non coincidono");
                  // alert("le password non coincidono");
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
}
