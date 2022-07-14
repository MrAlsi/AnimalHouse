import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AggiungiDBService } from '../aggiungi-db.service';




@Component({
  selector: 'app-preferenze',
  templateUrl: './preferenze.component.html',
  styleUrls: ['./preferenze.component.css']
})
export class PreferenzeComponent implements OnInit {

  id?: any;
  animali: any[]=[]; //array con tutti gli animali selezionabili
  preferiti: any[]=[]; //array che contiene gli animali selezionati

  constructor(public biscotto: MangiaBiscottoService, public http: HttpClient, private router: Router, public DB: AggiungiDBService) { }

  ngOnInit(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }

    //chiamata al db per prendere gli animali per selezionare le preferenze
    this.http.get<any>('http://localhost:3000/CRUD/listaAnimali/')
        .subscribe(data => {
          this.animali=data;
          console.log(data);
        });
  }

  salva(): void{
    const dati={
      username: this.id,
      preferiti: this.preferiti
    }
    //aggiungo alla collezione animaliPreferiti il nuovo documento
    this.DB.aggiungiDB(dati, "animaliPreferiti");
    this.router.navigate(['homepage']);

  }


  aggiungi(pet: string, img: string): void{
    for(var i=0;i<this.preferiti.length;i++){
      //controllo l'animale non sia già stato selezionato
      if(pet==this.preferiti[i]){
        break;
      }
    }
    var prefe={
      nome: pet,
      image: img
    }
    this.preferiti?.push(prefe);
  }

}
