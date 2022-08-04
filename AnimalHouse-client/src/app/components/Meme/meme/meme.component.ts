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

<<<<<<< HEAD
  getHD(i: number): any{
    //console.log("HD: ", this.video[i].video_files);
    this.video[i].video_files.forEach((qualita: any) => {
      if(qualita.quality === 'hd'){
        this.link = qualita.link;
      }
    })
  }
  
=======
>>>>>>> 1bfae3246405598297c424b4d7da1ec29aff61ea
  swippa():void{
    if(this.indice < this.video.length-1){
      this.indice += 1;
    } else {
      this.stop = true;
    }
  }
}