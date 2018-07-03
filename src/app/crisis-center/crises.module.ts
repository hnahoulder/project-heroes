import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';

import {CrisisService} from './crisis.service';
import {CrisesRoutingModule} from './crises-routing.module';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisesRoutingModule

    ],
    declarations: [
        CrisisCenterComponent,
        CrisisDetailComponent,
        CrisisCenterHomeComponent,
        CrisisListComponent
    ],
    providers: [CrisisService]
})

export class CrisisCenterModule {
}