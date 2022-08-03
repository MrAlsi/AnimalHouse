import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
 
import { DayService, WeekService, MonthService, WorkWeekService, EventSettingsModel, TimelineViewsService, AgendaService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
import { L10n } from '@syncfusion/ej2-base';

import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';

import { Event } from './event';
import { arrayGiorni } from './dizionarioGiorni';
import { MangiaBiscottoService } from '../mangia-biscotto.service';


@Component({
  selector: 'app-prenota',
  providers: [DayService, WeekService, MonthService, WorkWeekService, TimelineViewsService, AgendaService],
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})

export class PrenotaComponent implements OnInit {




  public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];


  public today: Date = new Date();
  public selectedDate: Date = new Date(this.today);

  public eventSettings?: EventSettingsModel;

  form: FormGroup;
  dataInput: any;

  @Input() dati: any | null = ""

  infoProfessionista?: any;
  giorniLiberi: any[]=["Lunedì","Martedì", "Mercoledì","Giovedì","Venerdì","Sabato","Domenica"];

  giorniBloccati: any[] =[] 

  appuntamenti: any[] = [];

  msgMezzora: boolean = false;

  constructor(public http: HttpClient, public biscotto: MangiaBiscottoService, public fb: FormBuilder,) {
    this.form = fb.group({
      "Data": ['',Validators.required],
      "Ora": ['',Validators.required]
    });
    console.log("info", this.dati)
    //http.get("http://localhost:3000/recensioni/")
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/appuntamenti/"+this.dati.idProf)
    .subscribe(data => {

    //Controllo per segnare gli appuntamenti già prenotati
    this.segnaAppuntamenti(data);
    //controllo in quali giorni non lavora
    this.controlloGiorni();
    //Controllo pause 
    this.segnaPausaPranzo();

    console.log("Giorni bloccati", this.giorniBloccati);

    //Aggiunge al calendario gli eventi bloccati
    this.eventSettings = {dataSource: this.giorniBloccati}

  
    document.getElementsByClassName("e-appointment")
   

    //eventi[0].setAttribute("(click)", "sonoFortissimo()");
    })


  
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


  segnaAppuntamenti(appuntamenti: any): void {
    appuntamenti.forEach((appuntamento: any) =>{
      var data = appuntamento.Day.split("T");
      data = data[0].split("-");
      
      var oraI = appuntamento.StartTime.split(":")
      var oraF = appuntamento.EndTime.split(":")

      this.giorniBloccati.push({
        Subject: this.getNome(appuntamento.Subject),
        StartTime: new Date(data[0], +data[1]-1, data[2], oraI[0], oraI[1]),
        EndTime: new Date(data[0], +data[1]-1, data[2], oraF[0], oraF[1]),
        IsBlock: this.controlloUser(appuntamento.Subject),
        IsAllDay: false,
        RecurrenceRule: "",
      })
    })
  }

  getNome(oggetto: string): string {
    if(!this.controlloUser(oggetto)){
      return oggetto;
    } else {
      return "OCCUPATO"
    }
  }

  controlloUser(oggetto: string): Boolean {
    if(oggetto === this.biscotto.getUsername() ||this.biscotto.getRuolo() === "admin"){
      return false;
    } else {
      return true;
    }
  }


  prendiNuovoEvento(): void {
    
    var evento = document.getElementsByClassName("e-new-event");
    console.log(evento);
  }



  confermaAppuntamento(): void {
    this.msgMezzora = false;
    //Transofrmo in stringa l'oggetto in input e Splitto per dividere il giorno e l'ora
    var input = JSON.stringify(this.dataInput).split("T");
  
    var data = input[0].split("-");

    console.log(this.dati);
    //Pulisco l'ora in input
    var ora = input[1].substring(0, 5);
    var oraF = ora.split(":");
    console.log(oraF[1])
    if(oraF[1] === "30"){
      this.msgMezzora = true;
    } else {
      //Creo il body per mandare i dati al DB
      var body = {
        idProfessionista: this.dati.idProf,
        Subject: this.biscotto.getUsername(),
        Day: this.dataInput,
        StartTime: this.pulisciOra(oraF[0], 2, oraF[1]),
        EndTime: this.pulisciOra(oraF[0], 3, oraF[1]),
        tipo: this.dati.tipo,
        nome: this.dati.nome
      }
      //Creo il documento nel DB
      this.http.put<any>("http://localhost:3000/CRUD/appuntamenti", body)
      .subscribe()
    }
        
  }

  pulisciOra(ora: string, plus: number, minuti: string ): string {
    var orario = +ora + plus;
    return orario.toString()+ ':' + minuti;
  }

  sonoFortissimo():void {
    console.log("WAAAAA");
  }


  dateParser(d: any): void {
    this.dataInput= d;
  }

  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
        args.duration = 60;
    }
}
}