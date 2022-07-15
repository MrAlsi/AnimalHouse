import { Component, OnInit } from '@angular/core';
import { CambiaPasswordService } from '../cambia-password.service';
import { ControllaCodiceService } from '../controlla-codice.service';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {


  constructor(public cambia: CambiaPasswordService, public codice: ControllaCodiceService) {}


  ngOnInit(): void {
  }


}
