import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);  // Promise, to avoid synchronous service.
  }
  getHero(id: number) {
    return this.getHeroes()
                 .then(heroes => heroes.find(hero => hero.id === id));  }
}
