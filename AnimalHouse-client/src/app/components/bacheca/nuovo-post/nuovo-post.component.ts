import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';


@Component({
  selector: 'app-nuovo-post',
  templateUrl: './nuovo-post.component.html',
  styleUrls: ['./nuovo-post.component.css']
})
export class NuovoPostComponent implements OnInit {
  
  constructor(public home: HomeService) { }

  ngOnInit(): void {
  }

}