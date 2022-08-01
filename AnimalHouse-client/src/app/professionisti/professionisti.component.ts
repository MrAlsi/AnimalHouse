import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;
  collezioni?: any[]=[];
  //collezione?: any;
  search: boolean= false;
  ruolo?: string;
  msgalert?: string;

  constructor(public fb: FormBuilder, private router: Router, public biscotto: MangiaBiscottoService, public http: HttpClient, public DB: AggiungiDBService) { 
    this.form = fb.group({
      "cerca": [""],
    });
  }

  ngOnInit(): void {
    this.cercatutti();
    //this.biscotto.getRuolo();
  }

  //metodo per eliminare il professionista
  elimina(id: string): void{
    console.log("id:", id)
    this.http.delete<any>('http://localhost:3000/CRUD/professionisti/'+ id)
    .subscribe(data => {
      this.collezioni=data;
      console.log(data);
    });
    //elimino recensioni
    this.http.delete<any>('http://localhost:3000/professionista/recensioni/'+id)
      .subscribe(data => {
        console.log(data);
        return;
      }); 
    window.location.reload();
  }

  //metodo per cercare un professionista tramite il nome
  cerca(): void{
    //console.log("c",this.form.value.cerca)
    if(this.form.value.cerca!=""){
      this.http.get<any>('http://localhost:3000/professionisti/'+ this.form.value.cerca)
        .subscribe(data=>{
          if(data!=null){
            this.search=true;
            this.collezioni=data;
          }else{
            this.msgalert=("Ci dispiace, il professionista cercato non esiste");
            //alert("Ci dispiace, il professionista cercato non esiste");
          }
        });
    }else{
      this.search=false;
      this.cercatutti();
    }
  }

  //metodo per visualizzare tutti i professionisti
  cercatutti(): void{
    this.http.get<any>('http://localhost:3000/CRUD/professionisti/')
        .subscribe(data => {
          this.collezioni=data;
          console.log(data);
        });
    this.search=false;

  }

  //metodo per indirizzarti alla creazione di professionsti
  addProf():void{
    this.router.navigate(['newProfessionisti']);

  }

}