import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodosService } from '../todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[];
  subscription: Subscription;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.subscription = this.todoService.todosChanged.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
      }
    );
    this.todos = this.todoService.getTodos();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
