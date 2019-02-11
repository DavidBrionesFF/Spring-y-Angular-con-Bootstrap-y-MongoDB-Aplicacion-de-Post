import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts;

  constructor(private service: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.service
        .search(this.route.snapshot.paramMap.get('id'))
        .subscribe(response => {
          this.posts = response;
        });
    } else {
      this.service.findAll().subscribe(response => {
        this.posts = response;
      });
    }
  }
}
