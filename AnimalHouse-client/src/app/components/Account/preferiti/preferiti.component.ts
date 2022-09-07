import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../../../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';
import { ProfiloServiceService } from '../../../profilo-service.service';


@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  id?: any;
  animali?: any;

  constructor(public biscotto: MangiaBiscottoService, public http: HttpClient, public profilo: ProfiloServiceService) { }

  ngOnInit(): void {
    
  }

}
