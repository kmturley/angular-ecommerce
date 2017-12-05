import { Injectable, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { Routes } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppRoutingService {
  private url = 'assets/data/navigation.json';
  public routes: Routes;

  constructor(
    private http: Http
  ) { }

  getRoutes() {
    return this.http.get(this.url)
      .toPromise()
      .then((data) => this.routes = data.json().data);
  }
}
