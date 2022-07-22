import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';
import { AggiungiDBService } from '../aggiungi-db.service';


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
  

  url: string= "professionisti"; //per indirizzare alla collection

  disponibilità: string[]= []; //array on le disponibilità

  constructor(public fb: FormBuilder, private router: Router, public biscotto: MangiaBiscottoService, public http: HttpClient, public DB: AggiungiDBService) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "città": ['',Validators.required],
      "via": ['',Validators.required],
      "civico": ['',Validators.required],
      "descrizione": ['',Validators.required],
      "online": [this.on],
      "domicilio": [this.dom],
      "tipo": [this.ruolo],
      "disponibilità": [this.disponibilità]
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

  //metodo per aggiungere le disponibilità del professionista
  addGiorno(giorno: string): void{
    this.disponibilità.push(giorno);
  }

  //metodo dove avvengono i controlli che tutto sia compilato, se va a buon fine salva sul db
  salva(): void{
    if(!this.form.valid){
      alert("dati mancati");
      return;
    }else{
      //controllo che i radio e i check siano stati compilati
      if(this.form.value.online!=undefined && this.form.value.domicilio!=undefined && this.disponibilità.length!=0){
        alert("aggiunto professionista con successo");
        this.form.value.tipo=this.ruolo;
        //aggiungo il documento al db
        this.DB.aggiungiDB(this.form.value, this.url);
        window.location.reload();
      }else{
        alert("compilare tutti i campi");
        return;
      }
    }
  }
}
