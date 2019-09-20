import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import {Comentario} from '../model/comentario.model';
import {Post} from '../model/post.model';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  private idPost: string;
  public post: Post;
  public nombre: string;
  public comentario: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService
  ) {}

  ngOnInit() {
    this.idPost = this.route.snapshot.paramMap.get('id');
    this.service.findById(this.idPost).subscribe(
      response => {
        this.post = response;
      },
      error => {
        this.router.navigate(['/']);
      }
    );
  }

  public enviar() {
    const data = {
      'comentario': this.comentario,
      'nombre': this.nombre
    };

    this.service.addComment(this.post.id, new Comentario().deserialize(data))
        .subscribe(response => {
          this.ngOnInit();
        });
  }
}
