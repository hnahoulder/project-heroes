import {Observable} from 'rxjs/Observable';
import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

import {Hero, HeroService} from './hero.service';
import {of} from 'rxjs/observable/of';
import {Subscription} from 'rxjs/Subscription';

@Component({
    template: `
        <h2>HEROES</h2>
        <p>Number: {{myNumber | async}}</p>
        <ul class="items">
            <li *ngFor="let hero of heroes$ | async"
                [class.selected]="hero.id === selectedId">
                <a [routerLink]="['/hero', hero.id]">
                    <span class="badge">{{ hero.id }}</span>{{ hero.name }}
                </a>
            </li>
        </ul>

        <button routerLink="/sidekicks">Go to sidekicks</button>

    `
})
export class HeroListComponent implements OnInit {
    heroes$: Observable<Hero[]>;
    myNumber: Observable<number>;
    numberSubscription: Subscription;

    private selectedId: number;

    constructor(private service: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.heroes$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number
                this.selectedId = +params.get('id');
                return this.service.getHeroes();
            })
        );       // this.numberSubscription = this.service.myNumber.subscribe(value => this.myNumber = value);
        this.myNumber = this.service.getNumber();

    }

}


