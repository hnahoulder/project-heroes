import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
// import {HeroDetailComponent} from './hero-detail/hero-detail.component';
// import {HeroListComponent} from './hero-list/hero-list.component';

const appRoutes: Routes = [
    // {path: 'crisis-center', component: CrisisCenterComponent},
    // {path: 'hero/:id', component: HeroDetailComponent},
    // {path: 'heroes', component: HeroListComponent, data: {title: 'Heroes List'}},
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes
            // ,{enableTracing: true} // <-- debugging purposes only)
        )],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
