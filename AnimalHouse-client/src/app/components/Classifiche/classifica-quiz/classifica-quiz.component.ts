import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from './classificaData';



@Component({
  selector: 'app-classifica-quiz',
  templateUrl: './classifica-quiz.component.html',
  styleUrls: ['./classifica-quiz.component.css']
})
export class ClassificaQuizComponent implements OnInit {

  @Input() data: Quiz[] = [];
  classificaGlobale: any;
  constructor() { }

  ngOnInit(): void {
    this.classificaGlobale = this.data;
    this.classificaGlobale.then((data:any) =>{
      console.log("DD:", data);
      }
      )
    for(let i=0; i<10; i++){
      this.classificaGlobale.forEach((giocatore: any) => {
        console.log("N:", i, giocatore);
      })
    }
  }

  topTenGlobal(): void {
    console.log(this.classificaGlobale.length);
    
  }
}
