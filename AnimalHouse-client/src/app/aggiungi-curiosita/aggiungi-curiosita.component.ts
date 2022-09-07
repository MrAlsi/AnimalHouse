//component che permette agli admin di aggiungere nuove curiosità in Babyaniaml

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';

@Component({
  selector: 'app-aggiungi-curiosita',
  templateUrl: './aggiungi-curiosita.component.html',
  styleUrls: ['./aggiungi-curiosita.component.css']
})
export class AggiungiCuriositaComponent implements OnInit {

  form: FormGroup;
  url: string = "curiosita"; //nome collezione nel db
  listaCuriosita?: string[] = [];
  msgalert?: string;
  msgsuccess?: string;
  input: any = '';


  constructor(public fb: FormBuilder, private router: Router, public db: AggiungiDBService) { 
    this.form = fb.group({
      "animale": ['',Validators.required],
      "icona": ['',Validators.required],
      "copertina": ['',Validators.required],
      "descrizione": ['',Validators.required],
      "curiosita": [this.listaCuriosita]
    })
  }

  ngOnInit(): void {
  }

  //metodo che consente di aggiungere più curiosità sull'animale che sto creando
  aggiungiCuriosita(curiosita: string): void{
    this.listaCuriosita?.push(curiosita);
    //Pulisco l'input per la successiva curiosità
    this.input = document.getElementById('curiosita');
    this.input.value = ''; 

  }

  //metodo che aggiunge le curiosità dell'animale al db
  aggiungi(ls: boolean): void{
    this.form.value.curiosita = this.listaCuriosita;
    if(!this.form.valid){
      this.msgalert=("dati mancati");
      return;
    } else {
      this.db.aggiungiDB(this.form.value, this.url);
      this.form.reset(); //pulisc i valori del form
      this.msgsuccess=("Animale aggiunto con successo");
  }
}
}