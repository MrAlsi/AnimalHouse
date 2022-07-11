import { Component, OnInit } from '@angular/core';
import { createClient } from 'pexels';
import { HttpClient } from '@angular/common/http';
import { PexelPhotoService } from '../pexel-photo.service';
import SwipeCore from 'swiper';


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

  constructor(private pexelService: PexelPhotoService) {
    this.pexelService.getData().subscribe(data => {
      this.video = data.media;
      console.log(this.video);
      this.getVideo();
    });

  }

  ngOnInit(): void {
  }
  
  getVideo():void{
    this.link = this.video[this.indice].video_files[this.indice].link+"&autoplay=1&loop=1&title=0&byline=0&portrait=0";
    console.log("LINK", this.link);
  }
  
  swippa():void{
    console.log("UAAAA")
  }
}
