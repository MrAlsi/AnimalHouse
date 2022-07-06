import { Component, OnInit } from '@angular/core';
import { GIOCHI } from '../lista-giochi';

@Component({
  selector: 'app-giochi',
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.css']
})
export class GiochiComponent implements OnInit {  
  giochi = GIOCHI;
  giochiamo?: string;
  constructor() { }

  ngOnInit(): void {
  }

  giocaA(gioco: string): void {
    this.giochiamo = gioco;
  }
}
