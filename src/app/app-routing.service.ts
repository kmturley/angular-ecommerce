import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppRoutingService {
    private url = 'assets/data/navigation.json';

    constructor(
        private http: Http,
    ) { }

    getItems(): Promise<any[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((data) => data.json().data);
    }
}
