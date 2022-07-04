import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private router: Router) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
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
    }else{//@todo: mancao i controlli su password e username
      this.router.navigate(['homepage']);
    }
  }

}
