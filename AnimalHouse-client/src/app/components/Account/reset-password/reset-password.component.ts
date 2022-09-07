import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../../../services/profilo-service.service';
import { CambiaPasswordService } from '../../../services/cambia-password.service';


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
