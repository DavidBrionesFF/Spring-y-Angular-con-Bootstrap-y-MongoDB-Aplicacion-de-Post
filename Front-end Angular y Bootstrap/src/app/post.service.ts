import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private uri = 'http://' + window.location.hostname + ':9000/api/v1';

  constructor(private http: HttpClient) {}

  public save(post) {
    return this.http.post(this.uri + '/posts', post);
  }

  public addComment(idPost, comentario) {
    return this.http.post(
      this.uri + '/posts/' + idPost + '/addcomment',
      comentario
    );
  }

  public findAll() {
    return this.http.get<any>(this.uri + '/posts/');
  }

  public find(idPost) {
    return this.http.get<any>(this.uri + '/post/' + idPost);
  }

  public search(search) {
    return this.http.get<any>(this.uri + '/post/search/' + search);
  }
}
