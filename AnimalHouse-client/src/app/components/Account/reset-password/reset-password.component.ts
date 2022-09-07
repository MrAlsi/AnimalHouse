//component che permette di cambiare la password quando si è già dentro al profilo
import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../../../profilo-service.service';
import { CambiaPasswordService } from '../../../cambia-password.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(public profilo: ProfiloServiceService, public cambia: CambiaPasswordService) {}

  ngOnInit(): void {
  }

}
