import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from '../service/videoservice.service';
import { Video } from '../interfaces/video';
import $ from 'jquery';

@Component({
  selector: 'app-main-player-section',
  templateUrl: './main-player-section.component.html',
  styleUrls: ['./main-player-section.component.css']
})
export class MainPlayerSectionComponent implements OnInit {
  video_data:any=[];
  video_url: any;
  errmsg: any='';

  constructor(private videoservice:VideoserviceService) { }

  ngOnInit() {
    this.getVideosData()
   
  }

  getVideosData()
  {
    this.videoservice.getVideosList().subscribe((data:Video)=>
      {
       this.video_data=data;
       this.video_url=this.video_data['0'].trailer
       console.log(this.video_data)
      },(error:Error)=>
      {
     this.errmsg=error.message;
    
      })
  }

  changeVideo(url)
  {
    console.log(url)
    this.video_url=url;
  }
}

