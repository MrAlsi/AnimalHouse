import { Component, OnInit } from '@angular/core';
import { CambiaPasswordService } from '../cambia-password.service';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {


  constructor(public cambia: CambiaPasswordService) {}


  ngOnInit(): void {
  }

}
