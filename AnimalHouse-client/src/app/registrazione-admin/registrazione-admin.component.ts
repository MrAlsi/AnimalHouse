import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';

@Component({
  selector: 'app-registrazione-admin',
  templateUrl: './registrazione-admin.component.html',
  styleUrls: ['./registrazione-admin.component.css']
})
export class RegistrazioneAdminComponent implements OnInit {
  form: FormGroup;
  postId: any; //id di ritorno da mongo
  url: string= "utenti"; //per indirizzare alla collection

  constructor(public fb: FormBuilder, private router: Router, public db: AggiungiDBService) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "cognome": ['',Validators.required],
      "email": ['',Validators.required],
      "username": ['',Validators.required],
      "confirmpassword": ['',Validators.required],
      "password": ['',Validators.required],
      "codice": ['',Validators.required],
      "ruolo": ['admin']
    });
  }

  ngOnInit(): void {
  }

  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  controllaInput(): void{
    if(!this.form.valid){
      alert("Dati mancanti");
      return;
    }else{//@todo: mancano i controlli sui singoli dati
      if(this.form.value.codice!="1111"){
        alert("codice amministratore errato");
      }else{
        if(this.form.value.password==this.form.value.confirmpassword){
          this.db.aggiungiDB(this.form.value,this.url);
          this.router.navigate(['homepage']);
        }else{
          alert("le password non coincidono");
        }
      }
    }
  }
}
