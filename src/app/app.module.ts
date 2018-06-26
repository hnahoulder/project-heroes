import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {AdminComponent} from './admin/admin.component';




@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        CrisisCenterComponent,
        AdminComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
