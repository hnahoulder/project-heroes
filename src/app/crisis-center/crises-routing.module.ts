import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisListComponent} from './crisis-list.component';

const crisisCenterRoutes: Routes = [
    {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
            {
                path: '',
                component: CrisisListComponent,
                children: [
                    {
                        path: ':id',
                        component: CrisisDetailComponent
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CrisesRoutingModule {
}
