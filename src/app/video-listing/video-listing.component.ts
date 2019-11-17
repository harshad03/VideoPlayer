import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  styleUrls: ['./video-listing.component.css']
})
export class VideoListingComponent implements OnInit {

  @Input() video_list:any;
  @Output() videoUrl=new  EventEmitter()

  slideConfig = {  
    "slidesToShow": 5,  
    "slidesToScroll": 1,  
    "dots": false,  
    "infinite": true  
  };

  constructor() { }

  ngOnInit() {
    console.log(this.video_list)
  }

  setVideoUrl(url)
  {
    this.videoUrl.emit(url)
  }
}

