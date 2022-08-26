import { Injectable } from '@angular/core';
import { ProfiloServiceService } from './profilo-service.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MangiaBiscottoService } from './mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CambiaPasswordService {
  msgalert?: string;
  form: FormGroup;
  form2: FormGroup;
  id?: string;
  password?: string;

  constructor(public fb: FormBuilder,public profilo: ProfiloServiceService, public biscotto: MangiaBiscottoService, public http: HttpClient) { 
    this.form = fb.group({
      "password": ['',Validators.required]
    });
    this.form2=fb.group({
      "password2": ['',Validators.required]
    });
  }

  //metodo per controllare siano stati inseriti i dati e che siano corretti
  verifica(): void{
    this.msgalert='';
    this.id=this.biscotto.getId();
   // console.log("ei id:",this.id)
    if(!this.form.valid){
      this.msgalert=("Dati mancanti");
      //alert("Dati mancanti");
      return;
    }else{
      //chiamata al db per prendere la password dell'utente
      this.http.get<any>('http://localhost:3000/CRUD/one/utenti/'+ this.id)
        .subscribe(data => {
          //console.log("k", data.password);
          this.password=data.password;
          if(this.password==this.form.value.password){
            //se la password è corretta passo alla card che permette l'inserimento della nuova password
            this.profilo.selectedNewPassword=true;
            this.profilo.selectedReset=false;
          }else{
            this.msgalert=("Password errata");
            //alert("Password errata");
            return;
          }
        });
    }
  }

  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  controllaPassword(): void{
    this.msgalert='';
    if(!this.form2.valid){
      this.msgalert=("Dati mancanti");
      //alert("Dati mancanti");
      return;
    }else{
      //controllo non sia stata inserita la stessa password
      if(this.password!=this.form2.value.password2){
        //console.log("p2",this.form2.value.password2);
        const pp= this.form2.value.password2;
        //console.log("pp",typeof(pp));

        //aggiorno la password
        this.http.put<any>('http://localhost:3000/CRUD/utenti/'+ this.id,{pp})
          .subscribe(data=>{
           // console.log("data",data.password);
            data.password=pp;
          }); 
          this.profilo.selectedNewPassword=false;
          window.location.reload();
      }else{
        this.msgalert=("non puoi inserire la stessa password");

        //alert("non puoi inserire la stessa password");
        return;
      }
    }
  }
}
