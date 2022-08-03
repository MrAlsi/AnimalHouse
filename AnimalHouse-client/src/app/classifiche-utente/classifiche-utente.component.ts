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

 
  punteggiQuiz(punteggi: Array<any>): Array<number> {
    return [this.calcolaPunteggio(punteggi), this.calcolaMedia(punteggi), punteggi[10].count ]
  }

  calcolaPunteggio(punteggio: Array<any>): number {
    let punti = 0;
    punteggio.forEach(risposte => {
      punti = punti +(risposte.punteggio * risposte.count);
    })

    return punti;
  }

  calcolaMedia(punteggio: Array<any>): number {
    let punti = 0;
    let totale = 0;

    punteggio.forEach(risposte => {
      punti = punti +(risposte.punteggio * risposte.count);
      totale = totale + risposte.count;
    })

    return punti/totale;

  }
  punteggioMemory(punteggi: Array<number>): Array<number>{
    return [this.calcolaRecord(punteggi), punteggi.length]
  }

  calcolaRecord(punteggi: Array<number>): number {
    let record = Infinity;
    punteggi.forEach(n => {
      if(n < record)
        record = n;
    })

    return record;
  }
}