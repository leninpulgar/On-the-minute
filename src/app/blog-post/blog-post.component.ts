import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  public blog = [];
  constructor(private _postService: ApiService) {}
  
  ngOnInit() {
    this._postService.getPosts()
    .subscribe(data => this.blog = data);
  }

}