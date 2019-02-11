import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  private idPost;
  public post;
  public nombre;
  public comentario;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService
  ) {}

  ngOnInit() {
    this.idPost = this.route.snapshot.paramMap.get('id');
    this.service.find(this.idPost).subscribe(
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

    this.service.addComment(this.post.id, data)
        .subscribe(response => {
          this.ngOnInit();
        });
  }
}
