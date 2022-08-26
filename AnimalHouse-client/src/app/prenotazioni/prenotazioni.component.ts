import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css']
})
export class PrenotazioniComponent implements OnInit {

  form: FormGroup;
  tipo?: string;
  check: boolean= false;
  collezioni?: any;

  constructor(public fb: FormBuilder, public http: HttpClient) { 
    this.form = fb.group({
      "tipo": [this.tipo],
    });
  }

  ngOnInit(): void {
  }

  //metodo per prendere dal radio la tipologia di professionista
  checked(prof: string): void{
    this.tipo = prof;
    this.form.value.tipo=this.tipo;
    this.check= true;
    if(this.tipo=="Ripetizioni di canto"){
      this.tipo="Ripetizioni%20di%20canto";
    }
    //chiamata al db per prendere solo i professionisti di quella tipologia
    this.http.get<any>('http://localhost:3000/professionista/'+ this.tipo)
      .subscribe(data=>{
        this.collezioni= data;
      });
  }

}
