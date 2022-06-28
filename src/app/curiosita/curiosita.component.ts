import { Component, OnInit } from '@angular/core';
import { CURIOSITA } from './lista-curiosita';

@Component({
  selector: 'app-curiosita',
  templateUrl: './curiosita.component.html',
  styleUrls: ['./curiosita.component.css']
})
export class CuriositaComponent implements OnInit {
  animali = CURIOSITA;

  constructor() { }

  ngOnInit(): void {
  }

}
