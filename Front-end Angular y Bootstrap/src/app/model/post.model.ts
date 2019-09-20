import {Serializable} from './serializable';
import {Deserializable} from './deserializable';
import {Comentario} from './comentario.model';
import {isNotNull} from '../util/UtilFunction';

export class Post implements Serializable, Deserializable<Post> {
  public id: string;

  public nombre: string;

  public texto: string;

  public descripcion: string;

  public fecha: Date;

  public comentarios: Array<Comentario> = [];

  deserialize(input: any): Post {
    Object.assign(this, input);
    if (isNotNull(input.comentarios)) {
      this.comentarios = input.comentarios.map(comentario => new Comentario().deserialize(comentario));
    } else {
      this.comentarios = [];
    }
    return this;
  }

  serializable(): Object {
    return JSON.parse(JSON.stringify(this));
  }
}
