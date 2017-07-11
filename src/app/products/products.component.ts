import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    private url = 'assets/data/products';
    items: Observable<any>;

    constructor(
        private http: Http
    ) { }

    ngOnInit() {
        this.items = this.http.get(this.url + '.json')
            .map((res: Response) => res.json().data);
    }

}
