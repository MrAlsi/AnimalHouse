import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //variabili per gestire la visualizzazioni delle card nel profilo
  selectedPrenotazioni:boolean= false;
  selectedStatistiche: boolean= false;
  selectedDati: boolean=false;

  
  showDati(): void{
    this.selectedDati=true;
    this.selectedPrenotazioni=false;
    this.selectedStatistiche=false;
  }

  showStatistiche(): void{
    this.selectedStatistiche=true;
    this.selectedDati=false;
    this.selectedPrenotazioni=false;
  }

  showPrenotazioni(): void{
    this.selectedDati=false;
    this.selectedPrenotazioni=true;
    this.selectedStatistiche=false;
  }

}
