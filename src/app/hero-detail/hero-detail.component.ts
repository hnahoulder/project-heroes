import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HeroService} from '../heroes/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private router: Router,
               private service: HeroService) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');

        this.hero$ = this.service.getHero(id);
    }
    gotoHeroes() {
        this.router.navigate(['/heroes']);
    }
}
