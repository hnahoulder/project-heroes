import {Observable} from 'rxjs/Observable';
import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {Crisis, CrisisService} from './crisis.service';
import {of} from 'rxjs/observable/of';
import {Subscription} from 'rxjs/Subscription';

@Component({
    template: `
        <h2>CRISES</h2>
        <!--<ul class="items">
            <li *ngFor="let crisis of crises$ | async"
                [class.selected]="crisis.id === selectedId">
                <a [routerLink]="['/crisis-center', crisis.id]">
                    <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
                </a>
            </li>
        </ul>-->
        <table class="table">
            <tr *ngFor="let crisis of crises$ | async"
                [ngClass]="{'selected': crisis.id === selectedId}"
                [routerLink]="['/crisis-center', crisis.id]">
                <td>{{ crisis.id }}</td>
                <td>{{ crisis.name }}</td>
            </tr>
        </table>

        <router-outlet></router-outlet>

    `
})
export class CrisisListComponent implements OnInit {
    crises$: Observable<Crisis[]>;

    selectedId: number;

    constructor(private service: CrisisService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.crises$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number
                // this.selectedId = +params.get('id');
                return this.service.getCrises();
            })
        );

    }

}


