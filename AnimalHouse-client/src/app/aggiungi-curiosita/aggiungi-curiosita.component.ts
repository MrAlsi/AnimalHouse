import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';

@Component({
  selector: 'app-aggiungi-curiosita',
  templateUrl: './aggiungi-curiosita.component.html',
  styleUrls: ['./aggiungi-curiosita.component.css']
})
export class AggiungiCuriositaComponent implements OnInit {

  form: FormGroup;
  url: string = "curiosita";
  listaCuriosita?: string[] = [];
  msgalert?: string;

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

  aggiungiCuriosita(curiosita: string): void{
    this.listaCuriosita?.push(curiosita);
    //Deve pulire la textfield
  }

  aggiungi(ls: boolean): void{
    this.form.value.curiosita = this.listaCuriosita;
    if(!this.form.valid){
      this.msgalert=("dati mancati");
      //alert("Dati mancanti");
      return;
    } else {
        this.db.aggiungiDB(this.form.value, this.url);
  }
}
}