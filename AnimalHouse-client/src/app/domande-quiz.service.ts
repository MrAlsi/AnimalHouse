import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DomandeQuizService{
  api?: any;
  risposte?: any;
  giusta?: string;

  constructor(public httpClient:HttpClient ) { }

  ngOnInit(): void {
    this.httpClient.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple').subscribe(data => {
      console.log("Data: ", data);
      this.api = data;
      console.log("API: ", this.api);
      this.risposte = this.mescola();
      this.giusta = this.api.results[0].correct_answer;
      }
    ) 
  }

  getDomanda(): string{
    console.log("domanda:", this.api);
    return this.api.results[0].question;
  }

  mescola(): any{
    let arrayRitorno = [
      this.api.results[0].correct_answer,
      this.api.results[0].incorrect_answers[0],
      this.api.results[0].incorrect_answers[1],
      this.api.results[0].incorrect_answers[2],
    ]

    arrayRitorno.sort();

    return arrayRitorno;
  } 

  controlloRisposta(): void{
    
  }
}
