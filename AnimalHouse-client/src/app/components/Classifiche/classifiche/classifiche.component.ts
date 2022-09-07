/*
  Component per le classifiche globali
*/

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

  classificaMemoryFacile: any[] = [];
  classificaMemoryMedio: any[] = [];
  classificaMemoryDifficile: any[] = [];

  constructor(public biscotto: MangiaBiscottoService, public punteggiQuiz: PunteggiQuizService, public http: HttpClient) { }

  ngOnInit(): void {
    this.biscotto.getRuolo();
    this.http.get('http://localhost:3000/CRUD/utenti').subscribe(data => {
      this.utenti = data;
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

      //calcola punteggi per classifica punteggio totale
      this.punteggioTotaleQuiz(this.quiz);
      
      //calcola punteggi per classifica medie punteggi
      this.punteggioTotaleQuizMedia(this.quiz2);
      
      //calcola punteggi per classifica punteggi perfetti
      this.maxDieci(this.quiz1);

      //calcola punteggi per classifica memory facile
      this.classificaMemory(this.dataMemoryFacile, 0);

      //calcola punteggi per classifica memory medio
      this.classificaMemory(this.dataMemoryMedio, 1);

      //calcola punteggi per classifica memory difficile
      this.classificaMemory(this.dataMemoryDifficile, 2);
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
    //console.log(quizArray)
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

        this.classificaPunteggioTotale?.push({"user": quizArray[maxId].user, "punteggio": max});

        quizArray.splice(maxId, 1);

      }
    } catch (e){

    }

  }

  //Calcola la top ten dei giocatori con la media alta
  punteggioTotaleQuizMedia(quizArray: Array<any>): void {
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
  
      }
    } catch (e) {
    }

  }



  //Punteggi Memory
  classificaMemory(punteggi: Array<any>, difficolta: number): void{
    //console.log("puntearrayggi", this.dataMemoryFacile);
    let record = Infinity;
    let idUtente = 0;
    let idPunteggio = 0;
    try{
      for(let i = 0; i < 11; i++){
        record = Infinity;
        idUtente = 0;
        idPunteggio = 0;

        punteggi.forEach((utente, indice) => {

          if(utente.storico != undefined){
          utente.storico.forEach((punteggio: any, index: number) => {
            if(punteggio < record){
              record = punteggio;
              idPunteggio = index;
              idUtente = indice;
            }

          })
        }
        })

        switch(difficolta){
          case 0:
            this.classificaMemoryFacile.push({"user": punteggi[idUtente].user, "punteggio": record});
            break;
          case 1:
            this.classificaMemoryMedio.push({"user": punteggi[idUtente].user, "punteggio": record});
            break;
          case 2:
            this.classificaMemoryDifficile.push({"user": punteggi[idUtente].user, "punteggio": record});
            break;
        }

        punteggi[idUtente].storico.splice(idPunteggio, 1);
      
      }

    } catch (e) {
      console.log(e);
    }
  }
}
