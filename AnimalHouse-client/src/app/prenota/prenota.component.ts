import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
 
import { DayService, WeekService, MonthService, WorkWeekService, EventSettingsModel, TimelineViewsService, AgendaService } from '@syncfusion/ej2-angular-schedule';


import { Event } from './event';
import { arrayGiorni } from './dizionarioGiorni';

@Component({
  selector: 'app-prenota',
  providers: [DayService, WeekService, MonthService, WorkWeekService, TimelineViewsService, AgendaService],
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})

export class PrenotaComponent implements OnInit {

  public today: Date = new Date();
  public selectedDate: Date = new Date(this.today);

  public eventSettings?: EventSettingsModel;

  @Input() dati: any | null = ""

  infoProfessionista?: any;
  giorniLiberi: any[]=["Lunedì","Martedì", "Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];

  giorniBloccati: any[] =[] 


  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    //controllo in quali giorni non lavora
    this.controlloGiorni();

    //Controllo pause 
    this.segnaPausaPranzo();

    //@TODO: Inserisco gli appuntamenti

    //Aggiunge al calendario gli eventi bloccati
    this.eventSettings = {dataSource: this.giorniBloccati}
  
    //@todo chiamata al db per prendere le prenotazioni
  }
  

  //Controllo in che giorni lavoro e li tolgo dall'array 
  controlloGiorni():void{
    this.dati.disponibilita.forEach((giorno: any)=> {
      for( var i = 0; i < this.giorniLiberi.length; i++){ 
        if ( this.giorniLiberi[i] === giorno) {
          this.giorniLiberi.splice(i, 1); 
        }
     }
    });
    this.segnaGiorni();
    console.log("GL:", this.giorniLiberi)
  }

  //Controllo i giorni che non lavora e li aggiungo alle date bloccate
  segnaGiorni(): void{
    var settimana =["Lunedì","Martedì", "Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];
    this.giorniLiberi.forEach(gioLib => {
      settimana.forEach((giorno, index)=> {
        if(gioLib === giorno){
          console.log("Add", index);
          this.giorniBloccati.push(arrayGiorni[index]);
        }
      }
    )
    })

      console.log("Daaam", this.giorniBloccati);
  };

  //Controlla la pausa in mezzo e aggiunge a date bloccate
  segnaPausaPranzo(): void {
    var oraI = this.dati.inizioPausa?.split(":");
    var oraF = this.dati.finePausa?.split(":");

    this.giorniBloccati.push({
      Subject: "pausa pranzo",
      StartTime: new Date(2000, 0, 1, +oraI[0], +oraI[1]),
      EndTime: new Date(2000, 0, 1, +oraF[0], +oraF[1]),
      IsBlock: true,
      RecurrenceRule: "FREQ=DAILY; INTERVAL=1"}
    )
  }

  prendiNuovoEvento(): void {
    var evento = document.getElementsByClassName("e-new-event");
    console.log(evento);

  }

}
