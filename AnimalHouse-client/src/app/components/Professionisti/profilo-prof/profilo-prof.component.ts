//component che permette la viasualizzazione dei singoli profili dei professionisti

import { Component, OnInit} from '@angular/core';
import { ProfiloServiceService } from '../../../services/profilo-service.service';
import { ActivatedRoute} from '@angular/router';
import { MangiaBiscottoService } from '../../../services/mangia-biscotto.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AggiungiDBService } from '../../../services/aggiungi-db.service';
import {Dati} from '../prenota/dati';




@Component({
  selector: 'app-profilo-prof',
  templateUrl: './profilo-prof.component.html',
  styleUrls: ['./profilo-prof.component.css']
})
export class ProfiloProfComponent implements OnInit {

  myId?: string;
  ruolo?: string;
  id: string | null = "";
  prof?: any;
  recensione: boolean= false;
  form: FormGroup;
  msgalert?: string;
  tabellaRecensioni: boolean= true;
  recensioni?: any[]=[];
  dato?: any;
  sonoio: boolean= false;
  recId?: any;
  user?: string;
  prenotazione: boolean=true;
  dati?: Dati;
  appuntamenti: any[]=[];
  appuntamentiPassati: any[]=[];
  

  constructor(public profilo: ProfiloServiceService, public route: ActivatedRoute, public biscotto: MangiaBiscottoService, public router: Router, public http: HttpClient, public fb: FormBuilder, public DB: AggiungiDBService) {
    this.form = fb.group({
      "recensione": ['',Validators.required]
    });
  }


  ngOnInit(): void {
    //prendo l'id del professionista che sto guardando da params
    this.id= this.route.snapshot.paramMap.get('nome'); 
    //prendo i miei dati
    this.ruolo= this.biscotto.getRuolo();
    this.user= this.biscotto.getUsername();
    this.myId= this.biscotto.getId();


    //prendo i dati dal db del professionsta
    this.http.get<any>('http://localhost:3000/CRUD/one/professionisti/'+ this.id)
      .subscribe(data=>{
        this.prof= data;
        this.dati = {
          idProf: data._id,
          disponibilita: data.disponibilita,
          oraInizio: data.mattinaDa,
          oraFine: data.pomeriggioA,
          inizioPausa: data.mattinaA,
          finePausa: data.pomeriggioDa,
          tipo: data.tipo,
          nome: data.nome,
          appuntamento: "",
          online: data.online,
          domicilio: data.domicilio
        }
        return;
      });

    //prendo i dati delle recensioni
    this.http.get<any>('http://localhost:3000/professionista/recensioni/'+ this.id)
      .subscribe(data=>{
        for(var i = 0; i < data.length; i++){
          //prendo l'username di chi ha scritto la recensione
          this.dato={
            u: data[i].utente,
            r: data[i].recensione,
            id: data[i]._id
          }

          //aggiungo le recensioni all'array delle recensioni
          this.recensioni?.push(this.dato);
          }
        return;
      });

    //prendo gli appuntamenti
    let oggi=new Date();
    //chiamata al db con tutti gli appuntamenti della persona
    this.http.get<any>('http://localhost:3000/appuntamenti/appuntamenti/'+ this.id)
      .subscribe(data=>{
        //formatto la data
        data.forEach((element: any) => {
          element.Day=element.Day.split("T");
          element.Day=element.Day[0];
          
          if(element.Day>=oggi.toISOString()){
            this.appuntamenti.push(element);
          }else{
            this.appuntamentiPassati.push(element);
          }
        });  
      });
  }

  //metodo per attivare il component per effettuare la prenotazione
  prenota(): void{
    this.prenotazione=false;
  }

  elimina(): void{
    //elimino professionista
    this.http.delete<any>('http://localhost:3000/CRUD/professionisti/'+this.id)
      .subscribe(data => {
        return;
      });
    //elimino recensioni
    this.http.delete<any>('http://localhost:3000/professionista/recensioni/'+this.id)
    .subscribe(data => {
      return;
    }); 

    //elimino appuntamenti
    this.http.delete<any>('http://localhost:3000/appuntamenti/'+this.id)
    .subscribe(data => {
    });    
    window.location.reload();
  }

  eliminaApp(id: any):void{
    this.http.delete<any>('http://localhost:3000/CRUD/appuntamenti/'+ id)
    .subscribe(data => {
    });
    window.location.reload();
  }

  //metodo per nascondere le recensioni e dare la possibilità di crearne una
  addRecensione(): void{
    this.recensione= true;
    this.tabellaRecensioni=false;
  }

  salvaRecensione(): void{
    this.msgalert=('');
    if(!this.form.valid){
      this.msgalert=("Dati mancanti");
      return;
    }else{
      //salvo i dati in un'unica variabile per passarli al db
      const dati={
        utente: this.user,
        professionista: this.id,
        recensione: this.form.value.recensione
      }
      //salvo nel db i dati necessari per la recensione
      this.DB.aggiungiDB(dati, 'recensioni');
      this.recensione= false;
      this.tabellaRecensioni=true;
      window.location.reload();
    }
  }

  eliminaRec(id: any): void{
    console.log("id",id);
    //elimino professionista
    this.http.delete<any>('http://localhost:3000/CRUD/recensioni/'+ id)
      .subscribe(data => {
      });

    window.location.reload();
  }

}
