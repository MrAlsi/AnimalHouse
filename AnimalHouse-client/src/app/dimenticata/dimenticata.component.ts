import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControllaCodiceService } from '../controlla-codice.service';

@Component({
  selector: 'app-dimenticata',
  templateUrl: './dimenticata.component.html',
  styleUrls: ['./dimenticata.component.css']
})
export class DimenticataComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private router: Router, public codice: ControllaCodiceService) { 
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
    if(!this.form.valid){
      alert("Inserire il codice");
      return;
    }else{
      if(this.codice.code==this.form.value.codice){
        this.Verifica();
      }else{
        alert("codice errato");
        this.router.navigate(['']);
      }
      
    }
  }

}
