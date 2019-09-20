import {Serializable} from './serializable';
import {Deserializable} from './deserializable';

export class Comentario implements Serializable, Deserializable<Comentario> {
  public id: string;

  public comentario: string;

  public fecha: Date;

  public nombre: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

  serializable(): Object {
    return JSON.parse(JSON.stringify(this));
  }
}
