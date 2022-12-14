import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../clases/customer';

@Injectable({
  providedIn: 'root'
})
export class SrvCustomerService {

  urlBase = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) { }

  getCustomerList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.urlBase}`);
  }

}
