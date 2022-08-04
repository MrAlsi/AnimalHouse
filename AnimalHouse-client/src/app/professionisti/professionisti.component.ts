import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';
import { AggiungiDBService } from '../aggiungi-db.service';



@Component({
  selector: 'app-professionisti',
  templateUrl: './professionisti.component.html',
  styleUrls: ['./professionisti.component.css']
})
export class ProfessionistiComponent implements OnInit {

  collezioni?: any[]=[];
  ruolo?: string;
  msgalert?: string;

  constructor(private router: Router, public biscotto: MangiaBiscottoService, public http: HttpClient, public DB: AggiungiDBService) {}

  ngOnInit(): void {
    this.cercatutti();
    //this.biscotto.getRuolo();
  }

  //metodo per eliminare il professionista
  elimina(id: string): void{
    //console.log("id:", id)
    this.http.delete<any>('http://localhost:3000/CRUD/professionisti/'+ id)
    .subscribe(data => {
      this.collezioni=data;
    });

    //elimino recensioni
    this.http.delete<any>('http://localhost:3000/professionista/recensioni/'+id)
      .subscribe(data => {
        return;
      }); 

    //elimino appuntamenti
    this.http.delete<any>('http://localhost:3000/appuntamenti/'+id)
    .subscribe(data => {
    });

    window.location.reload();
  }

  //metodo per visualizzare tutti i professionisti
  cercatutti(): void{
    this.http.get<any>('http://localhost:3000/CRUD/professionisti/')
        .subscribe(data => {
          this.collezioni=data;
        });
  }

  //metodo per indirizzarti alla creazione di professionsti
  addProf():void{
    this.router.navigate(['newProfessionisti']);
  }
}