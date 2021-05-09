import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userAdd } from './states/user-state/user.actions';
import { UserState, initialState } from './states/user-state/user.state';
import {Subject, Subscription} from "rxjs";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {
  title = 'filed';
  userObject = null;
  showButton = true;
  showDetails = true;
  subject$ = new Subject();

  constructor(
    private store: Store<{user:UserState}>,
    private router: Router
  ) {

  }

  ngOnInit():void{
    this.store.select('user').pipe(
      takeUntil(this.subject$)
    ).subscribe(
      data=> {
        this.userObject = data
      }
    )
  }

  navigateToHome() {
    this.router.navigate(['./home'])
  }

  toggleDetails(){
    this.showDetails = !this.showDetails
  }

  ngOnDestroy():void{
    this.subject$.next(true)
    this.subject$.complete()
  }
}
