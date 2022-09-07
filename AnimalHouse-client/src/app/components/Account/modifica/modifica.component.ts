import { Component, OnInit } from '@angular/core';
import {Dati} from '../../Professionisti/prenota/dati';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  dati?: Dati;
  prof?: string;
  id?:any;
  appuntamento?: any;


  constructor(public http: HttpClient, public route: ActivatedRoute) { 
    this.id= this.route.snapshot.paramMap.get('id'); 
    this.appuntamento= this.route.snapshot.paramMap.get('appuntamento'); 

    //console.log("ID:", this.id);
    this.http.get<any>('http://localhost:3000/CRUD/one/professionisti/'+ this.id)
      .subscribe(data=>{
        this.prof= data;
       // console.log("data",data);
        this.dati = {
          idProf: data._id,
          disponibilita: data.disponibilita,
          oraInizio: data.mattinaDa,
          oraFine: data.pomeriggioA,
          inizioPausa: data.mattinaA,
          finePausa: data.pomeriggioDa,
          tipo: data.tipo,
          nome: data.nome,
          appuntamento: this.appuntamento,
          online: data.online,
          domicilio: data.domicilio
        }
        //console.log("datimodifica",this.dati);
        return;
      });
  }

  ngOnInit(): void {
    
  }

}
