import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(
    private post: PostsService
  ) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
