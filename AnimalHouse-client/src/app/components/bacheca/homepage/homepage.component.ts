import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AggiungiDBService } from 'src/app/aggiungi-db.service';
import { MangiaBiscottoService } from 'src/app/mangia-biscotto.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  posts: any;
  constructor(public biscotto: MangiaBiscottoService, public fb: FormBuilder, public DB: AggiungiDBService, public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/CRUD/post/')
    .subscribe(data => {
        this.posts = data;
        console.log("POST:", this.posts);
      })
  }

}
