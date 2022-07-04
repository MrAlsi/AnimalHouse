import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder,public profilo: ProfiloServiceService) { 
    this.form = fb.group({
      "password": ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  //metodo per controllare siano stati inseriti i dati e che siano corretti
  verifica(): void{
    if(!this.form.valid){
      alert("Dati mancanti");
      return;
    }else{
      //@todo manca la parta di controllo password
      //se la password è corretta passo alla card che permette l'inserimento della nuova password
      this.profilo.selectedNewPassword=true;
      this.profilo.selectedReset=false;
    }
  }

}
