import {Component, Input, OnInit} from '@angular/core';
import {Carta} from "../carta";

async function getRandomDogUrl(): Promise<string> {
  var url: string = "";

  await fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      url = data.message;
    })

  return url;
}

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.css']
})

export class MemoryBoardComponent implements OnInit {
  @Input() numeroCoppie: 5 | 8 | 12 = 5;
  carte: Carta[] = [];
  private loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
    console.log("Num coppie", this.numeroCoppie)
    for (let i = 0; i < this.numeroCoppie; i++) {
      var urlPromise: Promise<string> = getRandomDogUrl();

      urlPromise.then(urlCaneRandom => {
        this.carte.push({id: 0, url: urlCaneRandom});
        this.carte.push({id: 0, url: urlCaneRandom});
        

        //Mescolo l'ordine delle carte
        for (let i = this.carte.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.carte[i], this.carte[j]] = [this.carte[j], this.carte[i]];
          this.carte[i].id = i;
          this.carte[j].id = j;
        }
      })
    }

    this.loading = false;
  }
}