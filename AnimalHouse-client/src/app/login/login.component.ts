import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  postId?: any;
    
  constructor(public fb: FormBuilder, private router: Router, public http: HttpClient, private cookieService: CookieService) { 
    this.form = fb.group({
      "user": ['',Validators.required],
      "password": ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  selectedDimenticata: boolean= false; //variabile per far apparire la card per cambiare la password
  dimenticata(): void{
    this.selectedDimenticata= true;
  }

  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  accedi(): void{
    if(!this.form.valid){
      alert("compila bene");
      return;
    }else{//@todo: mancao i controlli su password e username
      let credenziali = this.form.value;
      this.http.put<any>('http://localhost:3000/ricercaUtenti', credenziali)
        .subscribe(data => {
          //Se data non è null vuol dire che ha trovato una corrispondenza nel DB
            if(data!==null){
              // TODO: accesso di utente normale o amministratore
              this.postId = data.id;
              //richiede il cookie al server
              this.http.put<any>('http://localhost:3000/login', this.postId)
                .subscribe(data => {
                  //Salva il cookie
                  this.cookieService.set('token', data);
                  this.router.navigate(['homepage'])})
              
            } else {  //Nessuna corrispondenza trovata, credenziali sbagliate
              // TODO: alert credenziali sbagliate
              console.log("Accesso negato");
            }
          }
        );      
    }
  }


}
