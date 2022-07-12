import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent implements OnInit {

  id?: any;
  animali?: any;

  constructor(public biscotto: MangiaBiscottoService, public http: HttpClient) { }

  ngOnInit(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
    console.log("ciao");

    this.http.get<any>('http://localhost:3000/CRUD/animaliPreferiti/'+ this.id)
    .subscribe(data => {
      this.animali=data.preferiti;
      console.log(this.animali);
    });
  }

}
