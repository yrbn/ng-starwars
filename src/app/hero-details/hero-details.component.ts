import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})

export class HeroDetailsComponent {
  hero: Hero;
  sub: any;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router,
              private http : Http){
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting hero with id: ', id);
      this.peopleService
            .get(id)
            .subscribe(p => this.hero = p,
                       e => this.errorMessage = e,
                       () => this.isLoading = false);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoNextHero() {
    let nextHeroId = this.hero.id + 1;

    if(nextHeroId === 17) {
      nextHeroId = 18;
    } else if(nextHeroId > 87) {
      nextHeroId = 1;
    }
    let link = ['/heroes/', nextHeroId];
    this.router.navigate(link);
  }

  gotoPreviousHero() {
    let previousHeroId = this.hero.id - 1;

    if(previousHeroId === 17) {
      previousHeroId = 16;
    } else if(previousHeroId === 0) {
      previousHeroId = 87;
    }
    let link = ['/heroes/', previousHeroId];
    this.router.navigate(link);
  }

  postPong() {
    return this.http.post('/pong', 'pong')
                    .subscribe(res => {
                      console.log(res);           
                    });
  }

  @ViewChild(ModalWindowComponent)
    ModalWindowComponent: ModalWindowComponent;

    open() {
        this.ModalWindowComponent.open();
    }
}
