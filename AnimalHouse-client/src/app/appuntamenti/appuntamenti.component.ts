import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfiloServiceService } from '../profilo-service.service';




@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.css']
})
export class AppuntamentiComponent implements OnInit {

  form: FormGroup;
  search: boolean= false;

  constructor(public fb: FormBuilder, public http: HttpClient, public profilo: ProfiloServiceService) { 
    this.form=fb.group({
      "cerca": [""],
    });
  }

  ngOnInit(): void {
    this.cercatutti(this.profilo.id);
  }

  cercatutti(id: any): void{
    //@todo chiamata al db con tutti gli appuntamenti della persona
    this.search=false;
  }


  cerca(): void{
    if(this.form.value.cerca!=""){
      //@todo chiamata al db dove cerco tra gli appuntamenti solo quelli con quel professionista
      //guarda cerca in utenti
    }else{
      this.search=false;
      this.cercatutti(this.profilo.id);
    }
  }

}
