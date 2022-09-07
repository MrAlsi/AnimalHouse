//component che richiede l'inserimento dell'username di cui ci si è dimenticati la password

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ControllaCodiceService } from '../controlla-codice.service';
import { CodividiUserService } from '../codividi-user.service';


@Component({
  selector: 'app-inserisci-email',
  templateUrl: './inserisci-email.component.html',
  styleUrls: ['./inserisci-email.component.css']
})

export class InserisciEmailComponent implements OnInit {
  email?: string;
  form: FormGroup;
  msgalert?: string;

  constructor(public fb: FormBuilder, public http: HttpClient, public codice: ControllaCodiceService, public condividi: CodividiUserService) { 
    this.form = fb.group({
      "username": ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  //metodo per far comparire il component per l'inserimento del codice che  verrà inviato via mail
  selectedVerifica: boolean= false;
  verifica(): void{
    this.msgalert='';
    if(!this.form.valid){
      this.msgalert=("inserire un username");
    }else{
      //controllo l'username inserito sia presente sul db
      this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.form.value.username)
        .subscribe(data=>{
          this.condividi.username=this.form.value.username;
          if(data!=null){
            //se è presente salvo la mail
            this.email=data.email;
            
            //richiamo il metodo per inviare la mail
            this.http.put<any>('http://localhost:3000/mandamail/'+this.email, this.email)
              .subscribe(data=>{
                if(data!=null){
                  this.codice.code=data.codice;
                  this.selectedVerifica= true;

                }else{
                  console.log("vuoto");
                }
              });
          }else{
            this.msgalert=("username non registrato");
          }
        });
    }
  }

}
