import { Component, OnInit } from '@angular/core';
import { ControllaCodiceService } from '../controlla-codice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { CodividiUserService } from '../codividi-user.service';
import { CambiaPasswordService } from '../cambia-password.service';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  form: FormGroup;
  id?: string;
  password?: string;
  password2?: string;
  msgalert?: string;


  constructor( public codice: ControllaCodiceService, public fb: FormBuilder, public http: HttpClient, public biscotto: MangiaBiscottoService, public condividi: CodividiUserService, public cambia: CambiaPasswordService) {
    this.form = fb.group({
      "password": ['',Validators.required]
    });
  }



  ngOnInit(): void {
  }

  cambiaPassword(): void{
    this.msgalert='';
    if(!this.form.valid){
      this.msgalert=("Dati mancanti");
      return;
    }else{
      //chiamata al db per prendere la password e l'id dell'utente con quel user
      this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.condividi.username)
      .subscribe(data => {
        if(data!=null){
          this.password2=data.password;
          this.id=data._id;
          //se la password sono diverse stampo un errore
          if(this.form.value.password!=this.password2){
            const pp=this.form.value.password;
            console.log("pp"+pp);
            //altrimenti procedo con il cambiare la password con la nuova
            this.http.put<any>('http://localhost:3000/CRUD/utenti/'+ this.id,{pp})
              .subscribe(data=>{
                data.password=pp;
              }); 
              window.location.reload();
          }else{
            this.msgalert=("non puoi inserire la stessa password");
            return;
          }
        }
        
      });
    }
  }
}
