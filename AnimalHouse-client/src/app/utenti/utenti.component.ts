import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { MangiaBiscottoService } from '../mangia-biscotto.service';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
   
  collezioni?: any[]=[];
  collezione?: any;
  form: FormGroup;
  search: boolean= false;
  ruolo?: string;
  msgalert?: string;


  constructor(public http: HttpClient, public fb: FormBuilder, public biscotto: MangiaBiscottoService) {
    this.form=fb.group({
      "cerca": [""],
    });
   }

  ngOnInit(): void {
    this.cercatutti();
    //prendo il ruolo perché se sono admin posso visualizzare dei bottoni in più
    this.ruolo=this.biscotto.getRuolo();
  }

  elimina(id: string): void{
    console.log("id:", id)
    this.http.delete<any>('http://localhost:3000/CRUD/utenti/'+ id)
    .subscribe(data => {
      this.collezioni=data;
      console.log(data);
    });
    window.location.reload();
  }

  cerca(): void{
    this.msgalert=('');
    if(this.form.value.cerca!=""){
      this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.form.value.cerca)
        .subscribe(data=>{
          if(data!==null){
            this.search=true;
            this.collezione=data;
          }else{
            this.msgalert=("Ci dispiace, l'utente cercato non esiste");
           // alert("Ci dispiace, l'utente cercato non esiste");
          }
        });
    }else{
      this.search=false;
      this.cercatutti();
    }
  }

  cercatutti(): void{
    this.http.get<any>('http://localhost:3000/CRUD/utenti/')
        .subscribe(data => {
          this.collezioni=data;
          console.log(data);
        });
    this.search=false;

  }
}
