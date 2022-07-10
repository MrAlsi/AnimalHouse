import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: FormGroup;
  id?: string;
  password?: string;

  constructor(public fb: FormBuilder,public profilo: ProfiloServiceService, public biscotto: MangiaBiscottoService, public http: HttpClient) { 
    this.form = fb.group({
      "password": ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.id=this.biscotto.getId();
  }

  //metodo per controllare siano stati inseriti i dati e che siano corretti
  verifica(): void{
    if(!this.form.valid){
      alert("Dati mancanti");
      return;
    }else{
      this.http.get<any>('http://localhost:3000/CRUD/one/utenti/'+ this.id)
        .subscribe(data => {
          console.log("k", data.password);

          this.password=data.password;
          if(this.password==this.form.value.password){
            //se la password è corretta passo alla card che permette l'inserimento della nuova password
            this.profilo.selectedNewPassword=true;
            this.profilo.selectedReset=false;
            //@todo manca salvare la nuova password
          }else{
            alert("Password errata");
            return;
          }
        });
    }
  }

}
