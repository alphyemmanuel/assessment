import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }
  rootURL = environment.API_URL;

  getPostList() {
    return this.http.get(this.rootURL + '/posts?_limit=20');
  }

  getUserList() {
    return this.http.get(this.rootURL + '/users?_limit=20');
  }


}
