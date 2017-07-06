import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppRoutingService {
    private url = 'assets/navigation.json';
    items: Array<any>;

    constructor(
        private http: Http,
    ) { }

    getItems(): Promise<any[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((data) => data.json().data);
    }
}
