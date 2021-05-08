import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './states/user-state/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from './services/payment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({user:userReducer}),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut:3000}),
    AppRoutingModule,
    
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
