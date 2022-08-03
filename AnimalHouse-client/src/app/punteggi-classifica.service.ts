import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunteggiClassificaService {

  utenti: any;

  constructor(public http: HttpClient) {
    this.http.get('http://localhost:3000/CRUD/utenti').subscribe(data => {
      this.utenti = data;
    })
   }


   //Punteggi quiz
   maxDieci(utenti: Array<any>): any{
    //var topDieci[] = [];
    this.utenti.forEach((utente: any) => {
      console.log("U", utente);
    })
    console.log("BUsdj")
    console.log(this.utenti);
    return "sfgfs";
   }

   //Punteggi memory
}
