import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  numlike?: any;

  constructor(public home: HomeService, public http: HttpClient) { }

  ngOnInit(): void {
    this.home.posted();
    //@todo prendere i post a cui hai messo mi piace gli metto in un array
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

    //@todo aggiungere i like nel db
    //@todo aggiungere il post nell'array
    //@todo aumentare i like al post
    this.http.get<any>('http://localhost:3000/CRUD/one/post/'+ id)
      .subscribe(data => {
        console.log("post",data);
        this.numlike=data.mipiace;
        return;
      });
    const like=this.numlike ++;
    /*this.http.put<any>('http://localhost:3000/CRUD/post/'+ id,{like})
      .subscribe(data=>{
        data.mipiace=like;
        return;
      }); */
  }

  dislike(myuser: string, id: any): void{
    //@todo togleire i like nel db
    //@todo togliere il post nell'array
    //@todo diminuire i like al post
  }





}
