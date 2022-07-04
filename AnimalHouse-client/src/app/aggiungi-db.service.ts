import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AggiungiDBService {

  postId: any; //id di ritorno da mongo

  constructor(public http: HttpClient) { }

  //metodo per aggiungere al database l'utente
  aggiungiDB(data: any, url: string): string{
    this.http.put<any>('http://localhost:3000/animali/'+ url, data)
        .subscribe(data => this.postId = data.id);
        return this.postId;
  }
}
