export class Todo {
  public id: string;
  public content: string;
  public done: boolean;
  public created: Date;

  constructor(id: string, content: string, done: boolean, created: Date) {
    this.id = id;
    this.content = content;
    this.done = done;
    this.created = created;
  }
}
