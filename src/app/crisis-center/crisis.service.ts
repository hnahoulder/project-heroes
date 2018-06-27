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
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class HeroService {
    myNumber = new Subject<any>();

    getHeroes() {
        return of(HEROES);
    }

   /* getNumber() {
        return of(668686538755657575);
    }

    getNumber2 = () => {
        return of(2);
    }*/

    getHero(id: number | string) {
        return this.getHeroes().pipe(
            // (+) before `id` turns the string into a number
            map(heroes => heroes.find(hero => hero.id === +id))
        );
    }


}