import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgKnifeModule } from 'ng-knife';
import { AdvancePaymentComponent } from './advance-payment/advance-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgKnifeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
