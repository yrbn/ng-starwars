import { Component } from '@angular/core';
import { PeopleService } from './people.service';
import { CookieService } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PeopleService, CookieService]
})

export class AppComponent {
  title = 'Starwars App';
}
