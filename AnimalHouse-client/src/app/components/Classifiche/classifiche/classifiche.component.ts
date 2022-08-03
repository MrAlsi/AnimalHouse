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
 
  //Array dei punteggi nei vari giochi
  dataQuiz: any[] = [];
  dataMemoryFacile: any[] = [];
  dataMemoryMedio: any[] = [];
  dataMemoryDifficile: any[] = [];
  
  //Array classifiche
  classificaPunteggioTotale: any[] = [];
  classificaPunteggioMedia: any[] = [];
  classificaPunteggiPerfetti: any[] = [];
  quiz: any[] = [];
  quiz1: any[] = [];
  quiz2: any[] = [];

  constructor(public biscotto: MangiaBiscottoService, public punteggiQuiz: PunteggiQuizService, public http: HttpClient) { 
    /*let quiz: any[] = [];
    let quiz1: any[] = [];
    this.http.get('http://localhost:3000/CRUD/utenti').subscribe(data => {
      this.utenti = data;
      console.log("U", this.utenti);
      this.utenti.forEach((utente: any) => {
        var punteggioQuiz = {
          "id": utente._id,
          "user": utente.username,
          "quiz": utente.quiz,
        }
       
        var punteggioMemoryFacile = {
          "id": utente._id,
          "user": utente.username,
          "storico": utente.memory_facile,
        }
  
        var punteggioMemoryMedio = {
          "id": utente._id,
          "user": utente.username,
          "storico": utente.memory_medio,
        }
  
        var punteggioMemoryDifficile = {
          "id": utente._id,
          "user": utente.username,
          "storico": utente.memory_difficile,
        }

        quiz1.push(punteggioQuiz);
        quiz.push(punteggioQuiz);
        this.dataMemoryFacile.push(punteggioMemoryFacile);
        this.dataMemoryMedio.push(punteggioMemoryMedio);
        this.dataMemoryDifficile.push(punteggioMemoryDifficile);
      });
      console.log("dataQuiz", this.dataQuiz);
      this.punteggioTotaleQuiz(quiz);
      this.maxDieci(quiz1);
    })

    console.log("FUCK", quiz, "|", this.dataQuiz);*/
  }

  ngOnInit(): void {
    this.biscotto.getRuolo();
    this.http.get('http://localhost:3000/CRUD/utenti').subscribe(data => {
      this.utenti = data;
      console.log("U", this.utenti);
      this.utenti.forEach((utente: any) => {
        var punteggioQuiz = {
          "id": utente._id,
          "user": utente.username,
          "quiz": utente.quiz,
        }
       
        var punteggioMemoryFacile = {
          "id": utente._id,
          "user": utente.username,
          "storico": utente.memory_facile,
        }
  
        var punteggioMemoryMedio = {
          "id": utente._id,
          "user": utente.username,
          "storico": utente.memory_medio,
        }
  
        var punteggioMemoryDifficile = {
          "id": utente._id,
          "user": utente.username,
          "storico": utente.memory_difficile,
        }

        this.quiz1.push(punteggioQuiz);
        this.quiz.push(punteggioQuiz);
        this.quiz2.push(punteggioQuiz);
        this.dataMemoryFacile.push(punteggioMemoryFacile);
        this.dataMemoryMedio.push(punteggioMemoryMedio);
        this.dataMemoryDifficile.push(punteggioMemoryDifficile);
      });
      console.log("dataQuiz", this.quiz);
      console.log("dataQuiz1", this.quiz1);

      this.punteggioTotaleQuiz(this.quiz);

      this.punteggioTotaleQuizPesato(this.quiz2);
      console.log("dataQuiz", this.quiz);

      this.maxDieci(this.quiz1);
    })

  }

  //Calcola la top ten dei giocatori con più punteggi perfetti
  maxDieci(quizArray: Array<any>): any{
    //let quizArray = this.dataQuiz;
    let max = 0;
    let maxId = 0;
    try{

      for(let i = 0; i < 10; i++){
        max = 0;
        maxId = 0;
      
        quizArray.forEach((utente: any, index) => {
          // console.log(utente.user, "   ", utente.quiz[10]);
          if(utente.quiz != undefined){
            if(utente.quiz[10].count > max) {
              max = utente.quiz[10].count;
              maxId = index;
            }
          }
        })
        this.classificaPunteggiPerfetti?.push({"user": quizArray[maxId].user, "punteggio": max});
        quizArray.splice(maxId, 1);
      }
    } catch (e){

    }
  }

  //Calcola la top ten dei giocatori con i punteggi più alti
  punteggioTotaleQuiz(quizArray: Array<any>): void {
    //let quizArray = this.dataQuiz
    console.log(quizArray)
    var punteggio = 0;
    try {
      for(let i = 0; i < 10; i++){
        var max = 0;
        var maxId = 0;
      
        quizArray.forEach((utente: any, index) => {
          punteggio = 0;
          if(utente.quiz != undefined){

            for(let i = 1; i < 11; i++){
              punteggio = punteggio + (utente.quiz[i].count * utente.quiz[i].punteggio);
            }
            
            if(max < punteggio){
              max = punteggio;
              maxId = index;
            }
          }
        })
        //console.log("user1",this.classificaPunteggioTotale[maxId]);

        this.classificaPunteggioTotale?.push({"user": quizArray[maxId].user, "punteggio": max});

        quizArray.splice(maxId, 1);
        console.log("user",this.classificaPunteggioTotale[maxId]);

      }
    } catch (e){

    }

  }

  punteggioTotaleQuizPesato(quizArray: Array<any>): void {
    //let quizArray = this.dataQuiz
    var punteggio = 0;
    var totale = 0;
    var media = 0;
    try{
      for(let i = 0; i < 10; i++){
        var max = 0;
        var maxId = 0;
      
        quizArray.forEach((utente: any, index) => {
          punteggio = 0;
          totale = 0;
          media = 0;

          if(utente.quiz != undefined){
            console.log("-------------------------------------------")
            for(let i = 1; i < 11; i++){
              punteggio = punteggio + ((utente.quiz[i].count * utente.quiz[i].punteggio));
              totale = totale + utente.quiz[i].count;
            }
            
            media = punteggio / totale;
          
            if(max < media){
              max = media;
              maxId = index;
            }
          }
        })
        //console.log("user1",this.classificaPunteggioTotale[maxId]);

        this.classificaPunteggioMedia?.push({"user": quizArray[maxId].user, "punteggio": max});
  
        quizArray.splice(maxId, 1);
        console.log("user",this.classificaPunteggioMedia[maxId]);
  
      }
    } catch (e) {
    }

  }





}
