import { Component, Input, OnInit } from '@angular/core';
import  {  NgChartsModule  }  from  'ng2-charts' ; 
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";



@Component({
  selector: 'app-classifiche-utente',
  templateUrl: './classifiche-utente.component.html',
  styleUrls: ['./classifiche-utente.component.css']
})
export class ClassificheUtenteComponent implements OnInit {
  
  @Input() data?: any
  // per i vari dataset
  ds_quiz?: any;
  ds_solitario?: any;
  ds_memory_facile?: any;
  ds_memory_medio?: any;
  ds_memory_difficile?: any;

  constructor() {

  }

  ngOnInit(): void {

  }

  dividiPunteggi(): void {
    //divido l'array dei dati nelle varie parti
    this.ds_quiz = this.data[0];
    this.ds_solitario = this.data[1];
    this.ds_memory_facile = this.data[2];
    this.ds_memory_medio = this.data[3];
    this.ds_memory_difficile = this.data[4];
  }

}
