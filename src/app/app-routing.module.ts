import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherReportComponent } from './weather/weather-report/weather-report.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'todos', component: TodosComponent },
  {
    path: 'weather',
    component: WeatherComponent,
    children: [{ path: ':locationName', component: WeatherReportComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
