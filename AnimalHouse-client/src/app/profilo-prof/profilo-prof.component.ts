import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';
import { ActivatedRoute} from '@angular/router';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profilo-prof',
  templateUrl: './profilo-prof.component.html',
  styleUrls: ['./profilo-prof.component.css']
})
export class ProfiloProfComponent implements OnInit {

  constructor(public profilo: ProfiloServiceService, public route: ActivatedRoute, public biscotto: MangiaBiscottoService, public router: Router, public http: HttpClient) { }

  ruolo?: string;
  id?: any;
  prof?: any;

  ngOnInit(): void {
    //prendo l'id del professionista che sto guardando da params
    this.id= this.route.snapshot.paramMap.get('nome'); 
    this.ruolo= this.biscotto.getRuolo();
    this.http.get<any>('http://localhost:3000/CRUD/one/professionisti/'+ this.id)
      .subscribe(data=>{
        this.prof= data;
        console.log("data",data);
      });
  }

  prenota(): void{
    //this.router.navigate(['newProfessionisti']); non ci va newProfessionisti ma la pagina di prenotazione
  }

  elimina(): void{
    this.http.delete<any>('http://localhost:3000/CRUD/professionisti/'+this.id)
      .subscribe(data => {
        console.log(data);
      });
  }

}
