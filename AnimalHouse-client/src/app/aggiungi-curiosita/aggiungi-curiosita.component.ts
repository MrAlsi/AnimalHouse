import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aggiungi-curiosita',
  templateUrl: './aggiungi-curiosita.component.html',
  styleUrls: ['./aggiungi-curiosita.component.css']
})
export class AggiungiCuriositaComponent implements OnInit {

  form: FormGroup;
  url: string = "curiosita";
  listaCuriosita?: string[] = [];

  constructor(public fb: FormBuilder, private router: Router, public db: AggiungiDBService, public http: HttpClient) { 
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
    console.log("curiosita:", curiosita);
    this.listaCuriosita?.push(curiosita);
    console.log("Lista curiosita: ",this.listaCuriosita);
    //Deve pulire la textfield
  }

  aggiungi(ls: boolean): void{
    this.form.value.curiosita = this.listaCuriosita;
    console.log("1",this.listaCuriosita);
    console.log("2",this.form.value.curiosita);
    console.log("3",this.form.value);
    console.log("ls", ls);
    if(!this.form.valid){
      alert("Dati mancanti");
      return;
    } else {
        this.db.aggiungiDB(this.form.value, this.url);
  }
}
}