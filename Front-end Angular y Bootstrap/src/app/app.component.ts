import {Component, OnInit} from '@angular/core';
import {Post} from './model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ByteCodeCliente';

  ngOnInit(): void {
    let obj = new Post().deserialize({
      'comentario': 'este es un comentario de ejemplo'
    });

    console.log( typeof obj.serializable());
  }
}
