import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserState } from '../states/user-state/user.state';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

  makePayment(user:UserState) {
    return this.http.post('', JSON.stringify({"userDetails":user}))
  }
}
