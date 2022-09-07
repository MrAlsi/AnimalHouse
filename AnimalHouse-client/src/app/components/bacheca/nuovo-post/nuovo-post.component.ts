/*
  Component per creare un nuovo post
*/

import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-nuovo-post',
  templateUrl: './nuovo-post.component.html',
  styleUrls: ['./nuovo-post.component.css']
})
export class NuovoPostComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file?: File; // Variable to store file
  
  constructor(public home: HomeService) { }

  ngOnInit(): void {
  }

  
}