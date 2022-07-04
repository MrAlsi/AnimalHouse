import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
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
      "ruolo": ['utente']
    });
  }

  ngOnInit(): void {
  }

  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  controllaInput(): void{
    console.log(this.form);
    if(!this.form.valid){
      alert("Dati mancanti");
      return;
    }else{// @TODO : manca controllare l'username sia già in uso e anche la mail
      if(this.form.value.password==this.form.value.confirmpassword){
        this.db.aggiungiDB(this.form.value,this.url);
        this.router.navigate(['homepage']);
      }else{
        alert("le password non coincidono");
      }
    }
  }

  

}
