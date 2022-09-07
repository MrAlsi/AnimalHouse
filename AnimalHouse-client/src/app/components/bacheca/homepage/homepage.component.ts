/*
  Component che prende i Post dal DB e li mostra
*/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AggiungiDBService } from 'src/app/services/aggiungi-db.service';
import { MangiaBiscottoService } from 'src/app/services/mangia-biscotto.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  posts: any;
  constructor(public biscotto: MangiaBiscottoService, public fb: FormBuilder, public DB: AggiungiDBService, public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/post/getPosts')
    .subscribe(data => {
        this.posts = data;
      })
  }

}
