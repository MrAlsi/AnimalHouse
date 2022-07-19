import { Component, OnInit } from '@angular/core';
import { ControllaCodiceService } from '../controlla-codice.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { CodividiUserService } from '../codividi-user.service';





@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  form: FormGroup;
  id?: string;
  password?: string;


  constructor( public codice: ControllaCodiceService, public fb: FormBuilder, public http: HttpClient, public biscotto: MangiaBiscottoService, public condividi: CodividiUserService) {
    this.form = fb.group({
      "password": ['',Validators.required]
    });
  }



  ngOnInit(): void {
  }


  //metodo per verificare che gli input inseriti( e se sono stati inseriti) siano validi
  controllaPassword(): void{
    if(!this.form.valid){
      alert("Dati mancanti");
      return;
    }else{
      //prendo il mio user e in base a quello recupero l'id
      console.log("user",this.condividi.username)
      this.http.get<any>('http://localhost:3000/CRUD/utenti/'+ this.condividi.username)
        .subscribe(data=>{
          this.id=data._id;
          console.log("data id:",data._id);
          console.log("ei id:",this.id)
        //chiamata al db per prendere la password dell'utente
        this.http.get<any>('http://localhost:3000/CRUD/one/utenti/'+ this.id)
          .subscribe(data => {
            console.log("k", data.password);
            this.password=data.password;
            //controllo non sia stata inserita la stessa password
            if(this.password!=this.form.value.password){
              const pp= this.form.value.password;

              //aggiorno la password
              this.http.put<any>('http://localhost:3000/CRUD/utenti/'+ this.id,{pp})
                .subscribe(data=>{
                  console.log("data",data.password);
                  data.password=pp;
                }); 
                alert("password cambiata con successo");
            }else{
              alert("non puoi inserire la stessa password");
              return;
            }
          });
      });
    }
  }
}
