import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router  } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    private url = 'assets/data/products.json';
    items: Array<any>;

    constructor(
        private http: Http,
        private router: Router
    ) { }

    ngOnInit() {
        this.getItems().then((items) => {
            this.items = items.filter(item => item.type === this.router.url.slice(1));
        });
    }

    getItems(): Promise<any[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((data) => data.json().data);
    }

}
