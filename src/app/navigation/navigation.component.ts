import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { routes } from 'app/app.module';

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
        this.language = paths[paths.length - 1].length === 1 ? paths[paths.length - 1] : 'en';
        this.items = routes;
        const routerConfig = this.router.config;
        this.items.forEach((item) => {
            routerConfig.push(item);
        });
        this.router.resetConfig(routerConfig);
    }

    onChange() {
        const paths = document.getElementsByTagName('base')[0].href.replace(/\/$/, '').split('/');
        paths.pop();
        window.location.href = paths.join('/') + '/' + this.language;
    }

}
