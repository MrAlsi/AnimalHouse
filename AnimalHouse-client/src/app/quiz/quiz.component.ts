import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decoded from 'jwt-decode';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent {
  
  cookie?: any;
  id?: any;

  api?: any;
  domanda?: string;
  risposte?: any;
  giusta?: string;
  colore: string = "btn-outline-dark";
  indice: number = 0;
  punteggio: number = 0;
  stato: string = "disabled";
  gioca: boolean = true;
  giaVotato: boolean = false;


  constructor(public httpClient:HttpClient, private cookieService: CookieService) {  }

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

  //Restituisce la domanda posta
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
    if(!this.giaVotato){
      if(risposta === this.giusta){
        this.colore = "btn-success";
        this.punteggio+=1;
      } else {
        /* let risposte = document.getElementsByClassName('risposta');
        for(let i = 0; i < 4; i++){
          console.log(document.getElementsByClassName('risposta'))
          if(risposte[i].textContent?.trim() === this.giusta){
              console.log("risposta giusta:", i);
              risposte[i].setAttribute('class', "btn risposta btn-success");
          } else {
            risposte[i].setAttribute('class', "btn risposta btn-danger");
          }
        } */
          Array.from(document.getElementsByClassName('risposta')).forEach((elemento) => {
            if(elemento.textContent?.trim() === this.giusta){
              console.log("risposta giusta:", elemento);
              elemento.setAttribute('class', "btn btn-success");
            } else {
              elemento.setAttribute('class', "btn btn-danger");
            }
          });
        }     
      }
      this.stato = "";
      this.giaVotato = true;
    }

  //Passa alla prossima domanda, incrementa l'indice per scorrere l'array, 
  //disabilita il bottone prossima domanda e carica il prossimo quesito
  prossimaDomanda(): void{
    this.indice+=1;
    if(this.indice < 10){
      this.stato = "disabled";
      this.caricaQuesito();
      this.giaVotato = false;
    } else {
      this.gioca = false;       //cambia l'html mostrando il punteggio finale e una frase d'incoraggiamento
      this.cookie = this.cookieService.get("token");  //Prende il cookie salvato
      if(this.cookie != null){    //Se c'è un cookie salvato salva il punteggio
        this.salvaPunteggio();    //Richiama il metodo per salvare il punteggio nel DB
      }
    }
  }

  salvaPunteggio(): void{
      this.cookie = jwt_decoded(this.cookie);  //Traduce il cookie
      console.log(this.cookie);

      //Crea il body per la richiesta al server
      var body = {
        "_id": this.cookie.id,
        "gioco": "Quiz",
        "punteggio": this.punteggio
      }

      //Manda la richiesta al server per salvare il risultato della partita
      this.httpClient.put<any>("http://localhost:3000/giochi/aggiungiPunteggio/quiz", body)
        .subscribe();
  }
}
