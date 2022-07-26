import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  gioco: boolean = false;
  numeroCoppieNum: 5 | 8 | 12 = 5;
  url: string = 'https://dog.ceo/api/breeds/image/random';
  mosse: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  numeroDiCoppie(n: 5 | 8 | 12): void{
    this.numeroCoppieNum = n;
    this.gioco = true;
  }
}
