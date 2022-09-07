//component che permette di visualizzare gli appuntamenti di un utente

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfiloServiceService } from '../../../services/profilo-service.service';
import { MangiaBiscottoService } from '../../../services/mangia-biscotto.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.css']
})
export class AppuntamentiComponent implements OnInit {

  appuntamenti: any[]=[];
  appuntamentiPassati: any[]=[];

  ruolo?: string;

  constructor(public http: HttpClient, public profilo: ProfiloServiceService, public biscotto: MangiaBiscottoService, public router: Router) { }

  ngOnInit(): void {
    this.cercatutti(this.profilo.profile);
    this.ruolo=this.biscotto.getRuolo();
  }

  cercatutti(user: any): void{
    //prendo la data di oggi
    let oggi=new Date();
    //chiamata al db con tutti gli appuntamenti della persona
    this.http.get<any>('http://localhost:3000/appuntamenti/tuoiappuntamenti/'+ user)
      .subscribe(data=>{
        //formatto la data
        data.forEach((element: any) => {
          element.Day=element.Day.split("T");
          element.Day=element.Day[0];
          
          //tenendo separati gli appuntamenti passati e futuri devo fare un controllo per verificare 
          //in quale array debbano essere messi
          if(element.Day>=oggi.toISOString()){
            this.appuntamenti.push(element);
          }else{
            this.appuntamentiPassati.push(element);
          }
        });  
      });
  }

  //metodo per poter eliminare gli appuntamenti
  elimina(id: any):void{
    this.http.delete<any>('http://localhost:3000/CRUD/appuntamenti/'+ id)
    .subscribe(data => {
      this.appuntamenti=data;
    });
    window.location.reload();
  }

  //metodo che permette di modificare un appuntamento
  modifica(id: any, appuntamento: any): void{
    this.router.navigate(['modifica/'+id+'/'+appuntamento]);
  }


}
