import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms"
import { RestaurantsModule } from './restaurants/restaurants.module';
import {UserModule} from './user/user.module';
import {AppHttpService} from "./app-http.service";

import {AppComponent} from './app.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RestaurantsModule,
        UserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AppHttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
