/*
  Component per vedere le classifiche di un utente nel suo profilo
*/

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classifiche-utente',
  templateUrl: './classifiche-utente.component.html',
  styleUrls: ['./classifiche-utente.component.css']
})
export class ClassificheUtenteComponent implements OnInit {
  
  dati?: any;
 
  //Salvo i vari punteggi
  punteggio_quiz: any[] = [];
  punteggio_memoryFacile: any[] = [];
  punteggio_memoryMedio: any[] = [];
  punteggio_memoryDifficile: any[] = [];

  constructor(public http:HttpClient, public route: ActivatedRoute,) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.http.get("http://localhost:3000/CRUD/utenti/" + username)
      .subscribe(data =>{
        this.dati = data;
        //Richiamo i vari metodi
        this.punteggio_quiz = this.punteggiQuiz(this.dati.quiz);
        this.punteggio_memoryFacile = this.punteggioMemory(this.dati.memory_facile);
        this.punteggio_memoryMedio = this.punteggioMemory(this.dati.memory_medio);
        this.punteggio_memoryDifficile = this.punteggioMemory(this.dati.memory_difficile);
      });
  }

  //Ritorna il punteggio totale nel quiz, la media dei punteggi e il numero di punteggi massimi
  punteggiQuiz(punteggi: Array<any>): Array<number> {
    return [this.calcolaPunteggio(punteggi), this.calcolaMedia(punteggi), punteggi[10].count]
  }

  // calcola il punteggio totale dei quiz
  calcolaPunteggio(punteggio: Array<any>): number {
    let punti = 0;
    punteggio.forEach(risposte => {
      punti = punti +(risposte.punteggio * risposte.count);
    })

    return punti;
  }

  //Calcola la media dei punteggi del quiz
  calcolaMedia(punteggio: Array<any>): number {
    let punti = 0;
    let totale = 0;

    punteggio.forEach(risposte => {
      punti = punti +(risposte.punteggio * risposte.count);
      totale = totale + risposte.count;
    })

    return punti/totale;

  }

  //ritorna il record (calcolato con i calcolaRecord) e le partite fatte
  punteggioMemory(punteggi: Array<number>): Array<number>{
    return [this.calcolaRecord(punteggi), punteggi.length]
  }

  //Trova il punteggio migliore nel memori, prende in input un'array di punteggi del memory
  calcolaRecord(punteggi: Array<number>): number {
    let record = Infinity;
    punteggi.forEach(n => {
      if(n < record)
        record = n;
    })

    return record;
  }
}