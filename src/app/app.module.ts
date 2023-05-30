import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosFormComponent } from './todos/todos-form/todos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todos/todo-list/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosFormComponent,
    TodoListComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
