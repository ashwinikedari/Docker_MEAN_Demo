import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  postImage(imageObj:{}) {
    //console.log('Fac', imageObj);
    return this.httpClient.post(this.baseUrl + '/image/', imageObj);
  }

  getImages(){
    return this.httpClient.get<any[]>(this.baseUrl + '/image/');
  }
}
