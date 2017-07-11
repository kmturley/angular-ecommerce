import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router  } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private url = 'assets/data/products/iphone.json';
    item: Observable<any[]>;

    constructor(
        private http: Http,
        private router: Router
    ) { }

    ngOnInit() {
        this.item = this.http.get(this.url)
            .map((res: Response) => res.json());
    }

}
