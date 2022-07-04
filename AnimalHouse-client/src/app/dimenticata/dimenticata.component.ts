import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dimenticata',
  templateUrl: './dimenticata.component.html',
  styleUrls: ['./dimenticata.component.css']
})
export class DimenticataComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private router: Router) { 
    this.form = fb.group({
      "codice": ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }


  //metodo per far comparire il component
  selectedVerifica: boolean= false;
  Verifica(): void{
    this.selectedVerifica= true;
  }

  //metodo per verificare che il codice sia stato inserito e che sia corretto
  controllaCodice(): void{
    if(!this.form.valid){
      alert("Inserire il codice");
      return;
    }else{//@todo: manca controllo sia il codice giusto
      this.Verifica();
    }
  }

}
