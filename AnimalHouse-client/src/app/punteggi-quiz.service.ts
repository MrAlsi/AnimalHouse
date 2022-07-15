import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PunteggiQuizService {

  punteggio?: any;
  constructor(private httpClient: HttpClient) { }

  getData(): any{
    return this.httpClient.get("http://localhost:3000/giochi/punteggiGlobaliQuiz");
  }
}
