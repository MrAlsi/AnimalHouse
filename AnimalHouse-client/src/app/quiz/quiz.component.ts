import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomandeQuizService } from '../domande-quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})


export class QuizComponent {
  //api = DomandeQuizService.
  domanda?: any;
  risposte?: any;
  giusta?: string;
  //service?: any;

  constructor(public service: DomandeQuizService) {
    
   /* this.risposte = service.api.risposte;
    this.giusta = service.api.giusta;*/
   }

  

  ngOnInit(): void {
    
    /*
    console.log("Domanda", service.getDomanda());
    this.domanda = service.getDomanda();
    /*this.httpClient.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple').subscribe(data => {
      console.log("Data: ", data);
      this.api = data;
      this.domande = this.mescola();
      this.giusta = this.api.results[0].correct_answer;
      }
    ) */
  }
/*
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
*/
}
