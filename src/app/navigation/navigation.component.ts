import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { HomeComponent } from 'app/home/home.component';
import { AppRoutingService } from '../app-routing.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    items: Array<any>;
    language: string;

    constructor(
        private location: Location,
        private router: Router,
        private routeService: AppRoutingService
    ) { }

    ngOnInit() {
        const paths = document.getElementsByTagName('base')[0].href.replace(/\/$/, '').split('/');
        this.language = paths[paths.length - 1].length === 2 ? paths[paths.length - 1] : 'en';
        this.items = this.routeService.routes;
        const routerConfig = this.router.config;
        this.items.forEach(route => {
            routerConfig.push(route);
        });
        console.log('getRoutes', routerConfig);
        this.router.resetConfig(routerConfig);
    }

    onChange() {
        const paths = document.getElementsByTagName('base')[0].href.replace(/\/$/, '').split('/');
        paths.pop();
        window.location.href = paths.join('/') + '/' + this.language;
    }

}
