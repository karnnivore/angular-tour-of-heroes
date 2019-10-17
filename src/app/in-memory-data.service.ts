import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice'},
      { id: 12, name: 'Pickle Rick'},
      { id: 13, name: 'Airo'},
      { id: 14, name: 'The Peak'},
      { id: 15, name: 'Rock Solid'},
      { id: 16, name: 'Liquid'},
      { id: 17, name: 'Magnetor'},
      { id: 18, name: 'Hurricane Steve'},
      { id: 19, name: 'Beach Blast'},
      { id: 20, name: 'Waterino'},
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
