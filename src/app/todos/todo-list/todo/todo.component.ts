import { Component, Input } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodosService } from '../../todos.service';

@Component({
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo;
  @Input() index: number;

  constructor(private todoService: TodosService) {}

  onDelete(id: string) {
    this.todoService.deleteTodo(id);
  }

  onDone(id: string) {
    this.todoService.doneTodo(id);
  }
}
