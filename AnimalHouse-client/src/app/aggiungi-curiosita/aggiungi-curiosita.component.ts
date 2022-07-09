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

  constructor(public fb: FormBuilder, private router: Router, public db: AggiungiDBService, public http: HttpClient) { 
    this.form = fb.group({
      "animale": ['',Validators.required],
      "icona": ['',Validators.required],
      "copertina": ['',Validators.required],
      "descrizione": ['',Validators.required],
      "curiosita": ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  controllaInput(): void{
    console.log(this.form);
    if(!this.form.valid){
      alert("Dati mancanti");
      return;
    } else {
      //this.http.get()
  }
}
}