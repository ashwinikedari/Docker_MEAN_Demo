import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.css']
})
export class ListImageComponent implements OnInit {

  imageList:Array<any>=[];
  constructor(private appService:AppServiceService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){
    this.appService.getImages().subscribe((res)=>{
      if(res.length>0){
        for(let i=0;i<res.length;i++){
          for(let j=0;j<res[i]['photos'].length;j++){
        this.imageList.push(res[i]['photos'][j].url);
        }
      }
      }
    });
  }
}
