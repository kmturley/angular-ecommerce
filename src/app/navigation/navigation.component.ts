import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { routes } from 'app/app.module';

import { HomeComponent } from 'app/home/home.component';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    items: Array<any>;
    language: string;

    constructor(
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() {
        const paths = document.getElementsByTagName('base')[0].href.replace(/\/$/, '').split('/');
        this.language = paths[paths.length - 1].length === 2 ? paths[paths.length - 1] : 'en';
        this.items = routes;
        const routerConfig = this.router.config;
        this.items.forEach((item) => {
            if (item.path === '') {
                item.component = HomeComponent;
            }
            routerConfig.push(item);
        });
        console.log('routerConfig', routerConfig);
        this.router.resetConfig(routerConfig);
    }

    onChange() {
        const paths = document.getElementsByTagName('base')[0].href.replace(/\/$/, '').split('/');
        paths.pop();
        window.location.href = paths.join('/') + '/' + this.language;
    }

}
