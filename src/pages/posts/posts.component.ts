import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe(
        (posts) => console.log('Posts ', posts),
        (error) => console.log('Error ', error)
      );
  }


}
