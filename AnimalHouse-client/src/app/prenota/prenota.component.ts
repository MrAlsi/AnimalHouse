import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css']
})
export class PrenotaComponent implements OnInit {

  @Input() dati: string | null = ""

  constructor() { }

  ngOnInit(): void {
    //@todo chiamata al db per prendere i giorni
    //@todo chiamata al db per prendere gli orari
    //@todo chiamata al db per prendere le prenotazioni
  }

}
