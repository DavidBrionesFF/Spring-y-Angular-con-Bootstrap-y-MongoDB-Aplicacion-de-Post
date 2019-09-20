import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import {Post} from '../model/post.model';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  public nombre;
  public post;
  public descripcion;

  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  public enviar() {
    const post = {
      'nombre': this.nombre,
      'texto': this.post,
      'descripcion': this.descripcion
    };

    this.postService.save(new Post().deserialize(post))
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/']);
        });
  }
}
