import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
  api?: any;
  domanda?: string;
  risposte?: any;
  giusta?: string;
  colore: string = "btn-outline-dark";
  indice: number = 0;

  constructor(public httpClient:HttpClient, 
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {   
    this.httpClient.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple').subscribe(data => {
      console.log("Data: ", data);
      this.api = data;
      this.caricaQuesito();
      }
    ) 
  }

  caricaQuesito(): void{
    console.log("Quesito", this.indice);
    this.colore = "btn-outline-dark"
    this.domanda = this.getDomanda();
    this.risposte = this.mescola();
    this.giusta = this.api.results[this.indice].correct_answer;
  }

  getDomanda(): string{
    return this.api.results[this.indice].question;
  }

  mescola(): any{
    //Metto la risposta giusta e le tre risposte sbagliate in un array
    let arrayRitorno = [
      this.api.results[this.indice].correct_answer,
      this.api.results[this.indice].incorrect_answers[0],
      this.api.results[this.indice].incorrect_answers[1],
      this.api.results[this.indice].incorrect_answers[2],
    ]

    //riordino le risposte in ordine alfabetico, in tal modo non si sa qual è quella giusta
    arrayRitorno.sort();

    //Ritorno l'array ordinato
    return arrayRitorno;
  } 
  

  //Per me ci sta che diventi tutto rosso, se volete solo uno fatelo voi
  controlloRisposta(risposta: any): void{
    if(risposta === this.giusta){
      this.colore = "btn-success";
      //serve un delay
    } else {
      this.colore = "btn-danger";
       //serve un delay
       this.prossimaDomanda();

    }
  } //(click)="controlloRisposta(risposta)"

  prossimaDomanda(): void{
    this.indice+=1;
    this.caricaQuesito();
  }
}
