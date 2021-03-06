import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  sub: any;     //subscription attribute

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        let id = +params['id'];                // + converts to number
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);
      });
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

    goBack() {
      window.history.back();
    }

}
