import {switchMap} from 'rxjs/operators';
import {Component, OnInit, HostBinding} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {slideInDownAnimation} from '../animations';
// import {of} from 'rxjs/observable/of';
import {Crisis, CrisisService} from './crisis.service';

@Component({
    template: `
        <h2>CRISE DETAIL</h2>
        <div *ngIf="crisis$ | async as crisis">
            <h3>"{{ crisis.name }}"</h3>
            <div>
                <label>Id: </label>{{ crisis.id }}
            </div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="crisis.name" placeholder="name"/>
            </div>
            <p>
                <button (click)="gotoCrises(crisis)">Back</button>
            </p>
        </div>
    `,
    animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    crisis$: Observable<Crisis>;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: CrisisService) {
    }

    ngOnInit() {
        this.crisis$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getCrisis(params.get('id')))
        );

    }


    gotoCrises(crisis: Crisis) {
        const crisisId = crisis ? crisis.id : null;
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }
}