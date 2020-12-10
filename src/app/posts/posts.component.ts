import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private mainService: MainServiceService) { }

  ngOnInit(): void {

    this.mainService.getPostList().subscribe((res: any[]) => {
      this.posts = res;
    })
  }

}
