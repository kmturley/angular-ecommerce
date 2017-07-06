import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingService } from './app-routing.service';
import { ProductsModule } from './products/products.module';

export let Settings = {
    items : []
};

export function init(config: AppRoutingService) {
    return () => config.getItems().then((items) => Settings.items = items);
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
        AppRoutingModule,
        ProductsModule
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
