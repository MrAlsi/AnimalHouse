import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Carta } from '../memory-card/carta';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.css']
})
export class MemoryBoardComponent implements OnInit {
  @Input() numeroCoppie?: number;
  n: any = 2;
  carte?: Carta[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.n = this.numeroCoppie;
    this.creaCarte();
  }

  //Creatore di carte
  creaCarte(): void {
    for(let i=0; i < this.n; i++) {
      let carta: Carta;
      this.httpClient.get("https://dog.ceo/api/breeds/image/random").subscribe(data => {
      console.log(data);
      carta.url = data;
      carta.id = i;
      console.log(carta)

      this.carte?.push(carta);
      }
      );

    }

    console.log("Carte: ", this.carte)
  }

}
