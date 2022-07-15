import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { PunteggiQuizService } from '../punteggi-quiz.service';
import { punteggio } from './punteggio';

@Component({
  selector: 'app-classifiche',
  templateUrl: './classifiche.component.html',
  styleUrls: ['./classifiche.component.css']
})
export class ClassificheComponent implements OnInit {

  punteggi?: any;
  classificaPunteggioTotale?: any[];
  classificaPunteggioTotalePesato?: any[];
  classificaPunteggiPerfetti?: punteggio[] = [{id: "a", punteggio: 0}];
  

  constructor(public biscotto: MangiaBiscottoService, public punteggiQuiz: PunteggiQuizService) { 
    this.classificaPunteggiPerfetti?.push({id: "a", punteggio: 0})
    this.punteggiQuiz.getData().subscribe((punteggi:any) => {
      this.punteggi = punteggi;
      this.calcolaPunteggi()
    })
  }

  ngOnInit(): void {
    this.biscotto.getRuolo();
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
