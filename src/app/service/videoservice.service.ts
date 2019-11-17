import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  api_path=environment.api;

  constructor(private httpclient:HttpClient) 
  {
  }

  getVideosList()
  {
    let option=new HttpHeaders({'source':'web'})
    
  return  this.httpclient.get(this.api_path+'getVideos',{headers:option}).pipe(map((data)=>
    {
      let videodata=data;
      return videodata;
    }))
  }
}


