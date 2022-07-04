import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfiloServiceService } from '../profilo-service.service';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private router: Router,  public profilo: ProfiloServiceService) { 
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
    }else{//@todo: mancano controlli non sia la stessa password di prima
        this.router.navigate(['homepage']);
        alert("Cambio password avvenuto con successo");

    }
  }

}
