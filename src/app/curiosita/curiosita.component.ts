import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CURIOSITA } from './lista-curiosita';

@Component({
  selector: 'app-curiosita',
  templateUrl: './curiosita.component.html',
  styleUrls: ['./curiosita.component.css']
})
export class CuriositaComponent implements OnInit {
  //animali = CURIOSITA;
  animali: any;

  constructor(public httpClient: HttpClient) { 
    //console.log(CURIOSITA);
    //console.log(httpClient.get<Array>('http://localhost:3000/animali'));
    this.httpClient.get('http://localhost:3000/CRUD/curiosita').subscribe(data => {
      console.log("Data: ", data);
      this.animali = data;}
      )
    //this.animali = CURIOSITA;
  
  }

  ngOnInit(): void {
  }


}
