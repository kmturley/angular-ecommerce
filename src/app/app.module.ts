import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Routes } from '@angular/router';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingService } from './app-routing.service';

export let routes: Routes;

export function init(config: AppRoutingService) {
    return () => config.getItems().then((items) => routes = items);
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: document['locale'] ? document['locale'] : 'en-US'
        },
        {
            provide: APP_INITIALIZER,
            useFactory: init,
            deps: [AppRoutingService],
            multi: true
        },
        AppRoutingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
