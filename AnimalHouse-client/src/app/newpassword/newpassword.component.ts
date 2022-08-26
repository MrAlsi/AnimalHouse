import { Component, OnInit } from '@angular/core';
import { ControllaCodiceService } from '../controlla-codice.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
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


  constructor( public codice: ControllaCodiceService, public fb: FormBuilder, public http: HttpClient, public biscotto: MangiaBiscottoService, public condividi: CodividiUserService, public cambia: CambiaPasswordService) {
    this.form = fb.group({
      "password": ['',Validators.required]
    });
  }



  ngOnInit(): void {
  }
}
