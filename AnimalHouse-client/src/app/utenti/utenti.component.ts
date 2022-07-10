import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {
   
  collezioni?: any[]=[];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:3000/CRUD/utenti/')
        .subscribe(data => {
          this.collezioni=data;
          console.log(data);
        });
  }

  elimina(id: string): void{
    console.log("id:", id)
    this.http.delete<any>('http://localhost:3000/CRUD/utenti/'+id)
    .subscribe(data => {
      this.collezioni=data;
      console.log(data);
    });
    window.location.reload();
  }
}
