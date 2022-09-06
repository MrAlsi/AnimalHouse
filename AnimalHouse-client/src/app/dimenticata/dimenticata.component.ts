//component che verifica la correttezza del codice inviato via mail per poter proseguire con il reset della password

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControllaCodiceService } from '../controlla-codice.service';

@Component({
  selector: 'app-dimenticata',
  templateUrl: './dimenticata.component.html',
  styleUrls: ['./dimenticata.component.css']
})
export class DimenticataComponent implements OnInit {
  form: FormGroup;
  msgalert?: string;

  constructor(public fb: FormBuilder, public codice: ControllaCodiceService) { 
    this.form = fb.group({
      "codice": ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }


  //metodo per far comparire il component
  Verifica(): void{
    this.codice.selectedVerifica= true;
  }

  //metodo per verificare che il codice sia stato inserito e che sia corretto
  controllaCodice(): void{
    this.msgalert='';
    if(!this.form.valid){
      this.msgalert=("Inserire il codice");
      return;
    }else{
      if(this.codice.code==this.form.value.codice){
        this.Verifica();
      }else{
        this.msgalert=("codice errato");
      }
    }
  }

}
