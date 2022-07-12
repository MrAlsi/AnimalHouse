import { Component, Input, OnInit, Output } from '@angular/core';
import { Carta } from './carta';
//import * as animals from "random-animals-api"

@Component({
  selector: 'app-carta-memory',
  templateUrl: './carta-memory.component.html',
  styleUrls: ['./carta-memory.component.css']
})
export class CartaMemoryComponent implements OnInit {
  @Input() carta: Carta = {
    id:"cane",
    stato: "coperta",
    url: "",
  };

  @Output() statoCarta:any;

  constructor() {
    this.getAnimalUrl(5).then((url) => this.carta.url = url);
   }
  
  getAnimalUrl = async (animalId: number): Promise<string> => {
    //const animals = require('random-animals-api');
    /*switch(animalId % 9) {
      case 0:
        animals.bunny()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 1:
        animals.cat()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 2:
        animals.dog()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 3:
        animals.duck()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 4:
        animals.fox()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 5:
        animals.koala()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 6:
        animals.lizard()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 7:
        animals.panda()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
      case 8:
        animals.shib()
        .then((url: string) => {
           console.log(url);
           return url;
          })
        .catch((error: string) => {
          console.error(error);
          return "";
          });
          break;
    }*/
    return "";
  }

  ngOnInit(): void {
  }

  cambiaStato():void {
    if(this.carta.stato==="coperta"){
      this.carta.stato = "selezionata";
    } else {
      this.carta.stato = "coperta";
    }
  }

}
