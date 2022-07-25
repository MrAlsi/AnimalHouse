import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ControllaCodiceService } from '../controlla-codice.service';
import { CodividiUserService } from '../codividi-user.service';


@Component({
  selector: 'app-inserisci-email',
  templateUrl: './inserisci-email.component.html',
  styleUrls: ['./inserisci-email.component.css']
})

export class InserisciEmailComponent implements OnInit {
  email?: string;
  form: FormGroup;
  msgalert?: string;

  constructor(public fb: FormBuilder, private router: Router, public http: HttpClient, public codice: ControllaCodiceService, public condividi: CodividiUserService) { 
    this.form = fb.group({
      "username": ['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  //metodo per far comparire il component per l'inserimento del codice
  selectedVerifica: boolean= false;
  verifica(): void{
    this.msgalert='';
    if(!this.form.valid){
      this.msgalert=("inserire un username");
      //alert("inserire un username");
    }else{
      this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.form.value.username)
        .subscribe(data=>{
          this.condividi.username=this.form.value.username;
          console.log("data",data);
          console.log("user", this.condividi.username);
          if(data!=null){
            console.log("sonoqui");
            this.email=data.email;
            
            //richiamo il metodo per inviare la mail
            this.http.put<any>('http://localhost:3000/cambiaPassword/'+this.email, this.email)
              .subscribe(data=>{
                if(data!=null){
                  //console.log("non vuoto", data);
                  this.codice.code=data.codice;
                  this.selectedVerifica= true;

                }else{
                  console.log("vuoto");
                }
              });
          }else{
            this.msgalert=("username non registrato");
            //alert("username non registrato");
          }
        });
    }
  }

}
