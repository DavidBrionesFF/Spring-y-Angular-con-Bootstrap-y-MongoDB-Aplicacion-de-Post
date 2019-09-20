import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './model/post.model';
import {Comentario} from './model/comentario.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private uri = 'http://' + window.location.hostname + ':9000/api/v1';

  constructor(private http: HttpClient) {}

  public save(post: Post) {
    return this.http.post(this.uri + '/posts', post.serializable(), {
    });
  }

  public addComment(idPost: string, comentario: Comentario) {
    return this.http.post(
      this.uri + '/posts/' + idPost + '/addcomment',
      comentario.serializable()
    );
  }

  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.uri + '/posts/')
      .pipe(map(value => value.map(value1 => new Post().deserialize(value1))));
  }

  public findById(idPost: string): Observable<Post> {
    return this.http.get<Post>(this.uri + '/post/' + idPost)
      .pipe(map(value => new Post().deserialize(value)));
  }

  public search(search: String): Observable<Post[]> {
    return this.http.get<Post[]>(this.uri + '/post/search/' + search)
      .pipe(map(value => value.map(value1 => new Post().deserialize(value1))));
  }
}
