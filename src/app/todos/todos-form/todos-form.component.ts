import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { TodosService } from '../todos.service';
import { Todo } from '../todo.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
})
export class TodosFormComponent {
  constructor(private todoService: TodosService) {}

  todoForm = new FormGroup({
    todo: new FormControl('', Validators.required),
  });

  onSubmit() {
    const todo: Todo = {
      id: uuid(),
      content: this.todoForm.value['todo'] ? this.todoForm.value['todo'] : '',
      done: false,
      created: new Date(Date.now()),
    };

    this.todoService.addTodo(todo);
    this.todoForm.reset();
  }
}
