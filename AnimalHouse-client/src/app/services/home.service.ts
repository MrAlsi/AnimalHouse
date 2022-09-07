//servizio che permette di creare nuovi post in bacheca


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
  baseApiUrl = "https://file.io";
  url = "";

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

  //memorizzo il testo del post
  salva1(): void{
    this.msgalert=('');
    //controllo abbia scritto qualcosa
    if(this.form.value.testo=='A cosa stai pensando?'||this.form.value.testo==''){
      this.msgalert=("Dati mancanti");
      return;
    }
    this.post.testo=this.form.value.testo;
    //richiamo metodo per salvare il post nel db
    this.salvaDB(this.post);
    window.location.reload();
  }
  
  //salvo che il post conterrà anche una foto
  addFoto(): void{
    this.msgalert='';
    if(this.carica==false){
      this.carica=true;
    }else{
      this.carica=false;
    }
    
  }


  //memorizzo la foto del post
  salva2(): void{
    this.msgalert=('');
    if(this.form2.value.img=='Inserisci immagine'||this.form2.value.img==''){
      this.msgalert=("Dati mancanti");
      return;
    }else{
      if(this.form.value.testo!='A cosa stai pensando?'&&this.form.value.testo!=''){
        this.post.testo=this.form.value.testo;
      }

      this.post.img=this.url;
      this.salvaDB(this.post);
      window.location.reload();
    }
  }  


  //salvo sul db il nuovo post
  salvaDB(post: any): void{
    this.post.user=this.username;
    console.log("post", post);
    this.DB.aggiungiDB(this.post, 'post');
  }


  //prendo i post dal db
  posted(): void{
    this.http.get<any>('http://localhost:3000/CRUD/post/')
      .subscribe(data => {
        this.collezioni=data;
        var dati;
        //controllo per ogni post se ho messo mi piace
        for(var i=0;i<data.length;i++){
          this.homessomipiace=false;
          for(var j=0;j<data[i].like.length;j++){
            if(data[i].like[j]==this.username){
              this.homessomipiace=true;
              dati={
                flag: this.homessomipiace,
                postId: data[i]._id,
              } 
            this.arrayPost?.push(dati);
            break;
            }
          }
            
          
        }
      });
  }

  //metodo per leggere l'url della foto
  onselectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

    }
  }
  
}