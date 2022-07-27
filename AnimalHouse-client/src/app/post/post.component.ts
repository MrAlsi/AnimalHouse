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

  constructor(public home: HomeService, public http: HttpClient) { }

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
    var user=this.home.username;
    console.log("azz",id);
    //@todo aggiungere i like nel db
    this.http.put<any>('http://localhost:3000/CRUD/persone/post/'+ id,{user})
      .subscribe(data=>{
        console.log("azz",data.like);
        this.likes.push(data.like);
        this.likes.push(user);
        for(var i=0; i<this.likes.length;i++){
          console.log("caio",this.likes[i]);
        }
        //window.location.reload();
      });
    //@todo aumentare i like al post
    this.http.get<any>('http://localhost:3000/CRUD/one/post/'+ id)
      .subscribe(data => {
        console.log("post",data);
        this.numlike=data.mipiace;
        var like=this.numlike +1;
        this.http.put<any>('http://localhost:3000/CRUD/like/post/'+ id,{like})
          .subscribe(data=>{
            console.log(like);
            data.mipiace=like;
            //window.location.reload();
          });
      });
  }

  dislike(myuser: string, id: any): void{
    //@todo togliere i like nel db
    //@todo togliere il post nell'array
    //@todo diminuire i like al post
    this.http.get<any>('http://localhost:3000/CRUD/one/post/'+ id)
      .subscribe(data => {
        console.log("post",data);
        this.numlike=data.mipiace;
        console.log(typeof(this.numlike));

        var like=this.numlike -1;
        this.http.put<any>('http://localhost:3000/CRUD/like/post/'+ id,{like})
          .subscribe(data=>{
            console.log(like);
            data.mipiace=like;
            window.location.reload();
          });
      });
  }





}
