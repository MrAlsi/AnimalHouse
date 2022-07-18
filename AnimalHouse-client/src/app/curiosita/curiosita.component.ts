import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { CURIOSITA } from './lista-curiosita';

@Component({
  selector: 'app-curiosita',
  templateUrl: './curiosita.component.html',
  styleUrls: ['./curiosita.component.css']
})
export class CuriositaComponent implements OnInit {
  //animali = CURIOSITA;
  animali?: any;
  stato?: string;
  id?: any;

  constructor(public httpClient: HttpClient, public biscotto: MangiaBiscottoService) {     
    this.httpClient.get('http://localhost:3000/curiosita').subscribe(data => { 
      console.log("Data: ", data);
      this.animali = data;
      
    });
  }

  ngOnInit(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
    //this.animali = CURIOSITA;
    try{
      this.stato = this.biscotto.getRuolo();
    }catch (error) {
      this.stato='';
    }
  }

  ordinaBestie(data: any): void{
    console.log("animali", data[0]);

    let primo = 0;
    for(let i = 0; i < data.lenght; i++){
      if(data.animale[i]>data.animale[primo]){
        primo = i;
      }
    }
    
    console.log(data[primo]);
    this.animali?.push(data[primo]);
    console.log(this.animali);
  }


}
