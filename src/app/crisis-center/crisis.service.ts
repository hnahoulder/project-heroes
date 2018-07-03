import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';


export class Crisis {
    constructor(public id: number, public name: string) {
    }
}

const CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again')
];

@Injectable()
export class CrisisService {

    getCrises() {
        return of(CRISES);
    }

    getCrisis(id: number | string) {
        return this.getCrises().pipe(
            map(crises => crises.find(crisis => crisis.id === +id))
        );
    }
}