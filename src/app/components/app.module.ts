import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomerFilterPipe } from './pipes/customer/customer-filter.pipe';
import { CustomerSortPipe } from './pipes/customer/customer-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ListCustomerComponent,
    CustomerFilterPipe,
    CustomerSortPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
