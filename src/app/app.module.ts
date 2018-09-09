import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RoutesModule} from "./routes/routes.module";
import {HomeModule} from "./routes/home/home.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HomeModule,
        RoutesModule
    ],
    providers: [
        // add your providers
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
