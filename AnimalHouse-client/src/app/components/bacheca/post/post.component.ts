import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { MangiaBiscottoService } from 'src/app/mangia-biscotto.service';
import { Post } from './post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = {
    _id: "string",
    testo: "string",
    img: "string",
    user: "string",
    mipiace: 0,
    like: []
  };
  id?: string;
  testo?: string;
  img?: string;
  user: string = "";
  mipiace: number = 0;
  likes?: string[]
    
  cuoricino: boolean = false;

  utente: string = '';
  ruolo?: string;

  constructor(public biscotto: MangiaBiscottoService, public http: HttpClient) {
      //Dati dell'utente
      this.utente = this.biscotto.getUsername();
      this.ruolo = this.biscotto.getRuolo();  
   }

  ngOnInit(): void {
      //inizializzo i valori di post
    this.id = this.post._id;
    this.testo = this.post.testo;
    this.img = this.post.img;
    this.user = this.post.user;
    this.likes = this.post.like;
    this.mipiace = this.likes.length;
    this.cuoricino=this.controlloLike();
  }

  //Controllo che l'utente sia presente nell'array dei mi piace
  controlloLike(): boolean{
    var rit = false;
    this.likes?.forEach(utente => {
      if(utente === this.utente){
        rit = true;
      }
    })
    return rit;
  }

  // Metti like al post
  like(): void{
    var user = this.utente;
    this.http.put('http://localhost:3000/post/persone/'+ this.post._id, {user}).subscribe(callback => {
      this.cuoricino = true;
      this.mipiace++;
    });
  }

  // Togli like al post
  dislike(): void{
    var user = this.utente;
    this.http.put('http://localhost:3000/post/dislike/'+ this.post._id, {user}).subscribe(callback => {
      this.cuoricino = false
      this.mipiace--;
    });
  }

  //Elimina il post
  elimina(id: any): void{
    console.log("id",id);
    this.http.delete<any>('http://localhost:3000/CRUD/post/'+ id)
      .subscribe(data => {
        console.log(data);
      });
    window.location.reload();
  }

}
