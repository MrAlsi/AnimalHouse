import { Component, OnInit } from '@angular/core';
import { GIOCHI } from '../lista-giochi';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent implements OnInit {
  giochi = GIOCHI;

  constructor() { }

  ngOnInit(): void {
  }

}
