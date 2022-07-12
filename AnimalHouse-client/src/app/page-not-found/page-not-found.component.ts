import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  src: any ="";
  constructor(private httpClient: HttpClient) { 
  }

  ngOnInit(): void {
    this.httpClient.get("https://dog.ceo/api/breeds/image/random").subscribe(data => 
    this.src = data
    );
  }

}
