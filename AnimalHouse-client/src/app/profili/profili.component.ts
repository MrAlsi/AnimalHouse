import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profili',
  templateUrl: './profili.component.html',
  styleUrls: ['./profili.component.css']
})
export class ProfiliComponent implements OnInit {


  constructor(public profilo: ProfiloServiceService, public http: HttpClient, public route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.profilo.profile= this.route.snapshot.paramMap.get('username'); //prendo il nome dell'utente che sto guardando da params
    this.profilo.profilo(); 
  }
}
