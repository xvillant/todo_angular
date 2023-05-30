import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Subject } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos: Todo[] = [
    new Todo(uuid(), 'First task', false, new Date(2015, 5, 12)),
    new Todo(uuid(), 'Second task', true, new Date(2016, 7, 24)),
    new Todo(uuid(), 'Third task', true, new Date(2023, 7, 30)),
    new Todo(uuid(), 'Forth task', false, new Date(2014, 8, 14)),
  ];
  todosChanged = new Subject<Todo[]>();

  getTodos() {
    this.sortTodos();
    return this.todos.slice();
  }

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.sortTodos();
    this.todosChanged.next(this.todos.slice());
  }

  deleteTodo(deleteId: string) {
    this.todos = this.todos.filter((todo) => todo.id !== deleteId);
    this.sortTodos();
    this.todosChanged.next(this.todos.slice());
  }

  doneTodo(doneId: string) {
    const objectToUpdate = this.todos.find((todo) => todo.id === doneId);
    if (objectToUpdate) {
      objectToUpdate.done = !objectToUpdate.done;
    }
    this.todosChanged.next(this.todos.slice());
  }

  sortTodos() {
    this.todos = this.todos.sort(
      (a, b) => a.created.getTime() - b.created.getTime()
    );
  }
}
