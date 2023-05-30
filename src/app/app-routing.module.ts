import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
