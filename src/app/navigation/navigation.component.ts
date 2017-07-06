import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationService } from './navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    providers: [NavigationService]
})
export class NavigationComponent implements OnInit {
    items: Array<any>;

    constructor(
        private router: Router,
        private navigationService: NavigationService
    ) { }

    ngOnInit() {
        const routerConfig = this.router.config;
        this.navigationService.getItems()
            .subscribe((items) => {
                items.forEach((item) => {
                    routerConfig.push(item);
                });
                this.items = items;
                this.router.resetConfig(routerConfig);
                console.log('navigationService.subscribe', items, routerConfig);
            })
    }

}
