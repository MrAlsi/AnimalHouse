import { Injectable } from '@angular/core';
import { MangiaBiscottoService } from './mangia-biscotto.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { AggiungiDBService } from './aggiungi-db.service';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  ruolo?: string;
  username?: any;
  newpost: boolean= false;
  form: FormGroup;
  form2: FormGroup;
  msgalert?: string;
  carica?: boolean=false;
  post={
    testo: '',
    img: '',
    user: ''
  }


  constructor(public biscotto: MangiaBiscottoService, public fb: FormBuilder, public DB: AggiungiDBService) {
    this.ruolo=this.biscotto.getRuolo();
    this.username=this.biscotto.getUsername();
    this.form = fb.group({
      'testo': ['A cosa stai pensando?']
    })
    this.form2= fb.group({
      'img': ['Inserisci immagine']

    })
  }

  newPost(): void{
    this.newpost=true;
  }

  salva1(): void{
    this.msgalert=('');
    console.log(this.form);
    if(this.form.value.testo=='A cosa stai pensando?'||this.form.value.testo==''){
      this.msgalert=("Dati mancanti");
      //alert("Dati mancanti");
      return;
    }
    this.post.testo=this.form.value.testo;
    this.salvaDB(this.post);
    //@todo caricare sul db
    window.location.reload();
  }
  

  addFoto(): void{
    if(this.carica==false){
      this.carica=true;
    }else{
      this.carica=false;
    }
    
  }

  salva2(): void{
    this.msgalert=('');
    console.log(this.form2);
    if(this.form2.value.img=='Inserisci immagine'||this.form2.value.img==''){
      this.msgalert=("Dati mancanti");
      //alert("Dati mancanti");
      return;
    }else{
        if(this.form.value.testo!='A cosa stai pensando?'&&this.form.value.testo!=''){
          this.post.testo=this.form.value.testo;
        }
        this.post.img=this.form2.value.img;
      //@todo salvare immagini caricate
      this.salvaDB(this.post);
      window.location.reload();
    }
  }  

  salvaDB(post: any): void{
    this.post.user=this.username;
    this.DB.aggiungiDB(this.post, 'post');
  }
}
