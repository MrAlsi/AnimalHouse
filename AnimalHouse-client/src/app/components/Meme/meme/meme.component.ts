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
      this.getHD(this.indice);
    });

  }

  ngOnInit(): void {
  }
  
  async getVideo():Promise<void>{
    
    //this.link = this.video[this.indice].video_files[1].link+"&autoplay=1&loop=1&title=0&byline=0&portrait=0";
    this.link = await this.getHD(this.indice);
    
  }

  getHD(i: number): any{
    console.log("HD: ", this.video[i].video_files);
    this.video[i].video_files.forEach((qualita: any) => {
      if(qualita.quality === 'hd'){
        this.link = qualita.link;
      }
    })
  }
  
  swippa():void{
    if(this.indice < this.video.length-1){
      this.indice += 1;
      this.getHD(this.indice);
    } else {
      this.stop = true;
    }
  }
}