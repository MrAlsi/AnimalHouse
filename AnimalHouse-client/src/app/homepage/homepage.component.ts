import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public home: HomeService) { }

  ngOnInit(): void {
  }


  

}
