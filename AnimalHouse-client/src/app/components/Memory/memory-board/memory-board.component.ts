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
  mosse: number = 0
  cartaGirata?: any;

  constructor() { }

  ngOnInit(): void {
    for (let id = 0; id < this.numeroCoppie; id++) {
      var urlPromise: Promise<string> = getRandomDogUrl();

      urlPromise.then(urlCaneRandom => {
        this.carte.push({id: id, url: urlCaneRandom, stato: "coperta"});
        this.carte.push({id: id, url: urlCaneRandom, stato: "coperta"});
        

        //Mescolo l'ordine delle carte
        for (let i = this.carte.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          console.log("i:", i, "j:", j);
          [this.carte[i], this.carte[j]] = [this.carte[j], this.carte[i]];
          this.carte[i].id = i;
          this.carte[j].id = j;
        }

        this.loading = false;
      })      
    }
  }


  giraCarta(id: number): void {
    this.carte[id] 
  }


  stampaId(id: number): void {
    this.mosse++;
    console.log(id);
    this.carte[id].stato = "scoperta"
  }


  controlloCoppie(id: number): void {
    if(this.carte[id].stato === 'coperta'){ //Controllo nel caso si clicki una carta scoperta o accoppiata
      if(this.cartaGirata === undefined){   //Se è undefined vuol dire che è la prima carta che giro delle due
        this.cartaGirata = this.carte[id];
        this.carte[id].stato='scoperta';
      } else {
        this.carte[id].stato='scoperta';
        if(this.cartaGirata.url === this.carte[id].url){  //Controllo gli url della carta precedentemente girata
          //Coppia
          this.carte[id].stato='accoppiata';
          this.carte[this.cartaGirata.id].stato = 'accoppiata';
          this.cartaGirata = undefined;   //Rimetto cartaGirata vuota 
        } else {
          //Sbagliato
          setTimeout(() => {                //Timer per tenere la carta mostrata per 2 secondi
            this.carte[id].stato='coperta';
            this.carte[this.cartaGirata.id].stato = 'coperta';
            this.cartaGirata = undefined;   //Rimetto cartaGirata vuota
          }, 2000);
        }
        this.mosse++;                   //Incremento il contatore mosse
        
      }
    }
  }
}