import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfiloServiceService } from '../profilo-service.service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.css']
})
export class AppuntamentiComponent implements OnInit {

  form: FormGroup;
  search: boolean= false;
  appuntamenti: any[]=[];
  appuntamentiPassati: any[]=[];

  ruolo?: string;

  constructor(public fb: FormBuilder, public http: HttpClient, public profilo: ProfiloServiceService, public biscotto: MangiaBiscottoService, public router: Router) { 
    this.form=fb.group({
      "cerca": [""],
    });
  }

  ngOnInit(): void {
    this.cercatutti(this.profilo.profile);
    this.ruolo=this.biscotto.getRuolo();
  }

  cercatutti(user: any): void{
    //prendo la data di oggi
    let oggi=new Date();
    var today=oggi.toLocaleDateString();
    //chiamata al db con tutti gli appuntamenti della persona
    this.http.get<any>('http://localhost:3000/appuntamenti/tuoiappuntamenti/'+ user)
      .subscribe(data=>{
        //formatto la data
        data.forEach((element: any) => {
          element.Day=element.Day.split("T");
          element.Day=element.Day[0];
          if(element.Day>today){
            this.appuntamenti.push(element);
          }else{
            this.appuntamentiPassati.push(element);
          }
        });  
      });
    this.search=false;
  }


  cerca(): void{
    if(this.form.value.cerca!=""){
      //@todo chiamata al db dove cerco tra gli appuntamenti solo quelli con quel professionista
      //guarda cerca in utenti
    }else{
      this.search=false;
      this.cercatutti(this.biscotto.getUsername());
    }
  }

  elimina(id: any):void{
    this.http.delete<any>('http://localhost:3000/CRUD/appuntamenti/'+ id)
    .subscribe(data => {
      this.appuntamenti=data;
    });
    window.location.reload();
  }

  modifica(id: any): void{
    this.router.navigate(['modifica/'+id]);
  }

}
