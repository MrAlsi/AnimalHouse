import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';
import { AggiungiDBService } from '../aggiungi-db.service';
import { Time } from '@angular/common';
import { ConnectableObservable } from 'rxjs';


@Component({
  selector: 'app-add-professionisti',
  templateUrl: './add-professionisti.component.html',
  styleUrls: ['./add-professionisti.component.css']
})


export class AddProfessionistiComponent implements OnInit {
  form: FormGroup;

  //variabii per gestire i radio
  ruolo?: string;
  on?: string;
  dom?: string;
  msgalert?: string;
  msgalertpos?: string;
  

  url: string= "professionisti"; //per indirizzare alla collection

  disponibilit√†: string[]= []; //array con le disponibilit√†

  constructor(public fb: FormBuilder, private router: Router, public biscotto: MangiaBiscottoService, public http: HttpClient, public DB: AggiungiDBService) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "citta": ['',Validators.required],
      "via": ['',Validators.required],
      "civico": ['',Validators.required],
      "descrizione": ['',Validators.required],
      "online": [this.on],
      "domicilio": [this.dom],
      "tipo": [this.ruolo],
      "disponibilita": [this.disponibilit√†],
      "mattinaDa":[Validators.required],
      "mattinaA":[Validators.required],
      "pomeriggioDa":[Validators.required],
      "pomeriggioA":[Validators.required]
    });
  }

  ngOnInit(): void {
    this.biscotto.getRuolo();

  }

  //metodo per prendere dal radio la tipologia di professionista
  checked(prof: string): void{
    this.ruolo = prof;
    this.form.value.tipo=this.ruolo;
  }

  //metodo per prendere il valore del radio per sapere se il professionista offre servizi a domicilio
  domicilio(radio: string): void{
    this.dom=radio;
    this.form.value.domicilio=this.dom;
  }

  //metodo per prendere il valore del radio per sapere se il professionista offre servizi online
  online(radio: string): void{
    this.on=radio;
    this.form.value.online = this.on;
  }

  //metodo per aggiungere le disponibilit√† del professionista
  addGiorno(giorno: string): void{
    this.disponibilit√†.push(giorno);
  }

  close(): void{
    window.location.reload();
  }

  //metodo dove avvengono i controlli che tutto sia compilato, se va a buon fine salva sul db
  salva(): void{
    this.msgalert='';
    this.msgalertpos='';
    if(!this.form.valid){
      this.msgalert=("dati mancati");
      //alert("dati mancati");
      return;
    }else{
      //controllo che i radio e i check siano stati compilati
      if(this.form.value.online!=undefined && this.form.value.domicilio!=undefined && this.disponibilit√†.length!=0){
        //controllo gli orari
        if(this.form.value.mattinaDa>this.form.value.mattinaA ||this.form.value.pomeriggioDa>this.form.value.pomeriggioA){
          this.msgalert=("l'inizio del turno non pu√≤ essere dopo la fine del turno");
          console.log("ciao");
          return;
        }else{
          if(this.form.value.mattinaA>this.form.value.pomeriggioDa){
            this.msgalert=("il turno del pomeriggio deve iniziare dopo la fine del turno della mattina");
            console.log("we");
            return;
          }
        }
        this.form.value.tipo=this.ruolo;
        //aggiungo il documento al db
        this.DB.aggiungiDB(this.form.value, this.url);
        window.location.reload();
      }else{
        this.msgalert=("compilare tutti i campi");
        //alert("compilare tutti i campi");
        return;
      }
    }
  }
}
