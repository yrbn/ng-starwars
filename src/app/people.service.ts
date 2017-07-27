import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Hero } from './hero';

@Injectable()
export class PeopleService {
  private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http){}

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  get(id: number): Observable<Hero> {
    let hero$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .map(mapHero)
      .catch(handleError);
      return hero$;
  }
}

function mapHero(response:Response): Hero {
  return toHero(response.json());
}

function toHero(response:any): Hero {
  let hero = <Hero>({
    id: extractId(response),
    url: response.url,
    name: response.name,
    birth: response.birth_year,
    weight: response.mass,
    height: response.height,
    hair: response.hair_color,
    skin: response.skin_color,
    eyes: response.eye_color
  });
  console.log('Parsed hero:', hero);
  return hero;
}

function extractId(heroData:any) {
  let extractedId = heroData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}

function handleError (error: any) {
  let errorMsg = error.message || `Oops, couldn't retrieve your data!`
  console.log(error)
  console.error(errorMsg);

  return Observable.throw(errorMsg);
}