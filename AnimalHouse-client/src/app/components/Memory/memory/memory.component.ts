import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import jwt_decoded from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  cookie?: any;

  gioco: string = "menu";
  numeroCoppieNum: 5 | 8 | 12 = 5;
  url: string = 'https://dog.ceo/api/breeds/image/random';
  mosse: number = 0;

  constructor(public httpClient:HttpClient, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  numeroDiCoppie(n: 5 | 8 | 12): void{
    this.numeroCoppieNum = n;
    this.gioco = "gioco";
  }

  fine(event: string): void{
    this.gioco = event,
    this.salvaPunteggio();
  }

  //Salvataggio nel DB
  salvaPunteggio(): void{
    console.log("Salva");

    this.cookie = jwt_decoded( this.cookieService.get("token"));  //Traduce il cookie
    console.log(this.mosse);

    //Crea il body per la richiesta al server
    var body = {
      "_id": this.cookie.id,
      "carte": this.numeroCoppieNum,
      "punteggio": this.mosse+1
    }

    //Manda la richiesta al server per salvare il risultato della partita
    this.httpClient.put<any>("http://localhost:3000/giochi/aggiungiPunteggio/memory", body)
      .subscribe();
}
}
