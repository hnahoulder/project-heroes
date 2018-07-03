import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


import {AppRoutingModule} from './app-routing.module';
import {HeroesModule} from './heroes/heroes.module';

import {CrisesRoutingModule} from './crisis-center/crises-routing.module';
import {CrisisCenterModule} from './crisis-center/crises.module';
import {ComposeMessageComponent} from './compose-message/compose-message.component';

// import {DialogService} from './dialog.service';


@NgModule({
    imports: [
        // CommonModule,
        FormsModule,
        HeroesModule,
        CrisesRoutingModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CrisisCenterModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        ComposeMessageComponent

    ],
    providers: [
        // DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
