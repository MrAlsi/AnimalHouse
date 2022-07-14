import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  gioco: boolean = false;
  numeroCoppieNum?: number;

  constructor() { }

  ngOnInit(): void {
  }

  numeroDiCoppie(n: number): void{
    this.numeroCoppieNum = n;
    this.gioco = true;
  }
}
