import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  selectedDimenticata: boolean= false;
  dimenticata(): void{
    this.selectedDimenticata= true;
  }

}
