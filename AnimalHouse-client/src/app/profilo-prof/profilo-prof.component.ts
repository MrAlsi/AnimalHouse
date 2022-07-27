import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';
import { ActivatedRoute} from '@angular/router';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AggiungiDBService } from '../aggiungi-db.service';




@Component({
  selector: 'app-profilo-prof',
  templateUrl: './profilo-prof.component.html',
  styleUrls: ['./profilo-prof.component.css']
})
export class ProfiloProfComponent implements OnInit {

  constructor(public profilo: ProfiloServiceService, public route: ActivatedRoute, public biscotto: MangiaBiscottoService, public router: Router, public http: HttpClient, public fb: FormBuilder, public DB: AggiungiDBService) {
    this.form = fb.group({
      "recensione": ['',Validators.required]
    });
   }

  myId?: string;
  ruolo?: string;
  id?: any;
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




  ngOnInit(): void {
    //prendo l'id del professionista che sto guardando da params
    this.id= this.route.snapshot.paramMap.get('nome'); 
    this.ruolo= this.biscotto.getRuolo();
    this.user= this.biscotto.getUsername();

    //prendo il mio id
    this.myId= this.biscotto.getId();
    //perndo i dati dal db del professionsta
    this.http.get<any>('http://localhost:3000/CRUD/one/professionisti/'+ this.id)
      .subscribe(data=>{
        this.prof= data;
        console.log("data",data);
        return;
      });

    //perndo i dati delle recensioni
    this.http.get<any>('http://localhost:3000/CRUD/recensioni/'+ this.id)
      .subscribe(data=>{
        for(var i = 0; i < data.length; i++){
          console.log("ciao",i);
          //prendo l'username di chi ha scritto la recensione
          console.log("utente", i);
          this.dato={
            u: data[i].utente,
            r: data[i].recensione,
            id: data[i]._id
          }
          console.log("dato",this.dato);
          this.recensioni?.push(this.dato);
          
          }
        console.log("array", this.recensioni);
        return;
      });


    
  }

  prenota(): void{
    //this.router.navigate(['newProfessionisti']); non ci va newProfessionisti ma la pagina di prenotazione
  }

  elimina(): void{
    this.http.delete<any>('http://localhost:3000/CRUD/professionisti/'+this.id)
      .subscribe(data => {
        console.log(data);
      });
      window.location.reload();
  }

  addRecensione(): void{
    this.recensione= true;
    this.tabellaRecensioni=false;
  }

  salvaRecensione(): void{
    this.msgalert=('');
    if(!this.form.valid){
      this.msgalert=("Dati mancanti");
      //alert("Dati mancanti");
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
    this.http.delete<any>('http://localhost:3000/CRUD/recensioni/'+ id)
      .subscribe(data => {
        console.log(data);
      });
    window.location.reload();
  }

}
