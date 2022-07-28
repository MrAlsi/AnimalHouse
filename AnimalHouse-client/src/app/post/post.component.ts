import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  likes:any[]=[];
  numlike?: any;

  constructor(public home: HomeService, public http: HttpClient) {}

  ngOnInit(): void {
    this.home.posted();
    //@todo controllare i post a cui hai messo mi piace
  }

  elimina(id: any): void{
    console.log("id",id);
    this.http.delete<any>('http://localhost:3000/CRUD/post/'+ id)
      .subscribe(data => {
        console.log(data);
      });
    window.location.reload();
  }

  like(myuser: string, id: any): void{
    //prendo il numero di mi piace
    this.http.get<any>('http://localhost:3000/CRUD/one/post/'+ id)
      .subscribe(data => {
        console.log("post",data);
        this.numlike=data.mipiace;
        var like=this.numlike+1;
        console.log("azz",data.like);
        //salvo il nuovo numero di mi piace
        this.http.put<any>('http://localhost:3000/post/like/'+ id,{like})
          .subscribe(data=>{
            console.log(like);
            data.mipiace=like;
            //window.location.reload();
          });
      });
    var user=this.home.username;
  
    //setto a true l'array del post
    for(var i=0; i<this.home.arrayPost.length;i++){
      if(this.home.arrayPost[i].postId==id){
          this.home.arrayPost[i].flag=true; 
          break;
      }
    }
    //aggiorno le persone a cui piace il post
    this.http.put<any>('http://localhost:3000/post/persone/'+ id,{user})
      .subscribe(data=>{
        console.log("array",this.home.arrayPost);

      });
    

  }

  dislike(myuser: string, id: any): void{
    //prendo il numero di like al post
    this.http.get<any>('http://localhost:3000/CRUD/one/post/'+ id)
      .subscribe(data => {
        console.log("post",data);
        if(data.mipiace!=0){
          this.numlike=data.mipiace;
          var like=this.numlike-1;
          console.log("azz",data.like);
          // diminuisco i like al post
          this.http.put<any>('http://localhost:3000/post/like/'+ id,{like})
            .subscribe(data=>{
              console.log(like);
              data.mipiace=like;
              //window.location.reload();
            });
        }
      });
    //setto il post a false
    for(var i=0; i<this.home.arrayPost.length;i++){
      if(this.home.arrayPost[i].postId==id){
          this.home.arrayPost[i].flag=false; 
          break;
        }
    }
    console.log("cia",this.home.arrayPost);
    //@todo togliere i like nel db
    var user=this.home.username;
    console.log("body", this.home.username);
    this.http.put<any>('http://localhost:3000/post/dislike/'+ id,{user})
      .subscribe(data=>{
        //window.location.reload();
      });
  }





}
