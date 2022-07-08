import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  postId?: any;
  ruolo?: string;
    
  constructor(public fb: FormBuilder, private router: Router, public http: HttpClient, private cookieService: CookieService, public biscotto: MangiaBiscottoService) { 
    this.form = fb.group({
      "user": ['',Validators.required],
      "password": ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  selectedDimenticata: boolean= false; //variabile per far apparire la card per cambiare la password
  dimenticata(): void{
    this.selectedDimenticata= true;
  }

  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  accedi(): void{
    if(!this.form.valid){
      alert("compila bene");
      return;
    }else{
      let credenziali = this.form.value;
      //Chiamata al db per cercare una corrispondenza
      this.http.put<any>('http://localhost:3000/ricercaUtenti', credenziali)
        .subscribe(data => {
          //Se data non è null vuol dire che ha trovato una corrispondenza nel DB, data = al token che dobbiamo salvare
          if(data!==null){
            this.cookieService.set("token",data);// in questo punto sto salvando il token in data
            this.biscotto.getRuolo();
            this.router.navigate(['homepage']);
          } else {  //Nessuna corrispondenza trovata, credenziali sbagliate
            alert("utente non trovato, riprova");
            //console.log("Accesso negato");
            return;
          }
        }
      );      
    }
  }
}
