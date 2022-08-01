import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../../../mangia-biscotto.service';
import { PunteggiQuizService } from '../../../punteggi-quiz.service';
import { punteggio } from './punteggio';

@Component({
  selector: 'app-classifiche',
  templateUrl: './classifiche.component.html',
  styleUrls: ['./classifiche.component.css']
})
export class ClassificheComponent implements OnInit {

  utenti?: any;
  punteggi?: any;
  classificaPunteggioTotale?: any[];
  classificaPunteggioTotalePesato?: any[];
  classificaPunteggiPerfetti?: punteggio[] = [{id: "a", punteggio: 0}];
  dataQuiz: any[] = [];

  

  constructor(public biscotto: MangiaBiscottoService, public punteggiQuiz: PunteggiQuizService, public http: HttpClient) { 
    this.http.get('http://localhost:3000/CRUD/utenti').subscribe(data => {
      this.utenti = data;
      this.estraiPunteggiQuiz();
    })
  }

  ngOnInit(): void {
    this.biscotto.getRuolo();
  }

  estraiPunteggiQuiz(): void {
    this.utenti.forEach((utente: any) => {
      var punteggioQuiz = {
        "id": utente._id,
        "quiz": utente.quiz,
      }
      this.dataQuiz?.push(punteggioQuiz);
    });
  }

  calcolaPunteggi(): void{

    console.log("entrato", this.punteggi);
    this.punteggi.forEach((utente:any) => {
      let id: any = utente._id;
      let punteggioTotale: any;
      let punteggioPesato: any;
      let perfetti: any;

      console.log("utente", utente)

      //calcolo punteggio totale

      //calcolo punteggio totale pesato

      //calcolo punteggi perfetti
      perfetti = utente.quiz[10];
    /*  try{
      this.classificaPunteggiPerfetti.push({"id": id, "punteggio": perfetti.count })
      } catch(){
        
      }
      console.log("per:", perfetti);
*/
    })
  }


}
