import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { User } from '../../classes/user';
import { Store } from '@ngrx/store'
import { take, tap } from 'rxjs/operators';
import { UserState } from 'src/app/states/user-state/user.state';
import { userAdd } from 'src/app/states/user-state/user.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output('paymentSuccess') paymentSuccess = new EventEmitter();
  @Output('paymentError') paymentError = new EventEmitter();




  paymentForm = new FormGroup({
    firstName: new FormControl(
      '',
      [Validators.required]
    ),
    lastName: new FormControl(
      '',
      [Validators.required]
    ),
    email: new FormControl(
      '',
      [Validators.required]
    ),
    phoneNumber: new FormControl(
      '',
      [Validators.required]
    ),
    monthlyAdvertisingBudget: new FormControl(
      '',
      [Validators.required]
    )
  })

  constructor(
    private paymentService: PaymentService,
    private store: Store<UserState>
  ) { }

  ngOnInit(): void {
  }

  makePayment() {
    const newUser = new User(this.paymentForm.controls)
    this.paymentService.makePayment(newUser).pipe(
      take(1),
      tap(value => {return value})
    ).subscribe(
      data => {
        this.paymentSuccess.emit()
        this.store.dispatch(userAdd({newUser:newUser}))
      },
      error => {
        this.paymentError.emit()
      }
    )
    
  }

}
