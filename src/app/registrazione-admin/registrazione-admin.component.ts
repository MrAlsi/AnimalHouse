import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione-admin',
  templateUrl: './registrazione-admin.component.html',
  styleUrls: ['./registrazione-admin.component.css']
})
export class RegistrazioneAdminComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, private router: Router) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "password": ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
