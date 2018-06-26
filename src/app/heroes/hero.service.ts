import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';


export class Hero {
    constructor(public id: number, public name: string) {
    }
}

const HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];

@Injectable()
export class HeroService {
    myNumber = new Subject<any>();

    getHeroes() {
        return of(HEROES);
    }

    getNumber() {
        return of(668686538755657575);
    }

    getNumber2() {
        this.myNumber.next(7);
    }

    getHero(id: number | string) {
        return this.getHeroes().pipe(
            // (+) before `id` turns the string into a number
            map(heroes => heroes.find(hero => hero.id === +id))
        );
    }


}