import { Component, OnInit } from '@angular/core';
import { createClient } from 'pexels';
import { HttpClient } from '@angular/common/http';
import { PexelPhotoService } from '../../../pexel-photo.service';
import SwipeCore from 'swiper';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})

export class MemeComponent implements OnInit {
  httpClient: any;
  video?: any;
  link: string ="";
  indice: number = 0;
  stop: boolean = false;

  constructor(private pexelService: PexelPhotoService) {
    this.pexelService.getData().subscribe(data => {
      this.video = data.media;
      //console.log(this.video)
     // this.mostraVideo(this.indice);
    });

  }

  ngOnInit(): void {
  }

  swippa():void{
    if(this.indice < this.video.length-1){
      this.indice += 1;
    } else {
      this.stop = true;
    }
  }
}