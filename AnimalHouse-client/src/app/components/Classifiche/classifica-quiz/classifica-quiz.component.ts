import { Component, OnInit, Input } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { PunteggiClassificaService } from 'src/app/punteggi-classifica.service';
import { Quiz } from './classificaData';



@Component({
  selector: 'app-classifica-quiz',
  templateUrl: './classifica-quiz.component.html',
  styleUrls: ['./classifica-quiz.component.css']
})
export class ClassificaQuizComponent implements OnInit {

  @Input() data: Quiz[] = [];
  @Input() maggioriDieci: any;
  classificaGlobale: any;

  constructor(public punteggi: PunteggiClassificaService) {
    //this.maggioriDieci =  punteggi.maxDieci();
   }

  ngOnInit(): void {
    
  }

  topTenGlobal(): void {
    console.log(this.classificaGlobale.length);
    
  }
}
