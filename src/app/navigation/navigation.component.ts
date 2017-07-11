import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routes } from 'app/app.module';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    items: Array<any>;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        console.log('NavigationComponent', routes);
        this.items = routes;
        const routerConfig = this.router.config;
        this.items.forEach((item) => {
            routerConfig.push(item);
        });
        this.router.resetConfig(routerConfig);
    }

}
