import { Injectable } from '@angular/core';
import { MangiaBiscottoService } from './mangia-biscotto.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { AggiungiDBService } from './aggiungi-db.service';
import { HttpClient } from '@angular/common/http';


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
    user: '',
    mipiace: 0,
    like: []
  };
  collezioni?: any;
  arrayPost:any[]=[];
  homessomipiace?: boolean;



  constructor(public biscotto: MangiaBiscottoService, public fb: FormBuilder, public DB: AggiungiDBService, public http: HttpClient) {
    this.ruolo=this.biscotto.getRuolo();
    this.username=this.biscotto.getUsername();
    this.form = fb.group({
      'testo': ['']
    })
    this.form2= fb.group({
      'img': ['']

    })
  }

  newPost(): void{
    if(this.newpost==false){
      this.newpost=true;
    }else{
      this.newpost=false;
    }
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
    window.location.reload();
  }
  

  addFoto(): void{
    this.msgalert='';
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

  posted(): void{
    this.http.get<any>('http://localhost:3000/CRUD/post/')
      .subscribe(data => {
        this.collezioni=data;
        var dati;
        //controllo per ogni post se ho messo mi piace
        for(var i=0;i<data.length;i++){
          console.log("ciao");
          this.homessomipiace=false;
          for(var j=0;j<data[i].like.length;j++){
            console.log("f",data[i]);
            if(data[i].like[j]==this.username){
              this.homessomipiace=true;
              console.log("data",data[i]);
              dati={
                flag: this.homessomipiace,
                postId: data[i]._id,
              } 
            this.arrayPost?.push(dati);
            break;
            }
          }
            
          
        }
        console.log("array",this.arrayPost);
      });
  }
}
