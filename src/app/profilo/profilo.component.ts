import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  postId: any;

  constructor(public profilo: ProfiloServiceService, public http: HttpClient) { }

  ngOnInit(): void {
  }


}
