import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Event } from '../../node_modules/@angular/router/src/events';
import { Store } from '@ngrx/store';
import { State } from './store/reducers/app.reducer';
import { LoadingEndAction, LoadingStartAction } from './store/actions/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string;
  title = 'first-app';

  constructor(private router: Router, private store$: Store<State>) {}
  routerEventSubscription: Subscription;

  ngOnInit() {
    this.routerEventSubscription = this.router.events
      .subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.store$.dispatch(new LoadingStartAction());
        }

        if (event instanceof NavigationEnd) {
          this.store$.dispatch(new LoadingEndAction());
          this.setName(event.url);
        }
      });
  }

  setName(url: string) {
    this.name = url.replace('/', '');
  }
}

