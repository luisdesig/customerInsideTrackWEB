import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/clases/customer';
import { SrvCustomerService } from 'src/app/services/srv-customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];
  customerFilter = "";
  customerSort= [];
  customeSortSel = "";
  customerGroupOptSel  = "";

  customerGroupOptions = [{
    "option": "0",
    "name":"Customer Root"
  },{
    "option": "1",
    "name":"Product Description"
  },]

  customerSortOptions = [{
    "option": "1",
    "name":"id"
  },
  {
    "option": "2",
    "name":"Customer Root"
  },{
    "option": "3",
    "name":"Customer Leaf"
  },{
    "option": "4",
    "name":"Product Description"
  },{
    "option": "5",
    "name":"Manufacturer"
  }];

  constructor(private customerSrv: SrvCustomerService){}

  ngOnInit(): void {
    this.getCustomer();
  }

  private getCustomer(){

    let locCustom: Customer[] = [];
    this.customerSrv.getCustomerList().subscribe(dato => {
      this.customers = dato;
    }); 
  }

  public downloadFile() {
    const resul= [];
      resul.push('id,purchase_date,invoice,customer_root,customer_leaf,product_description,pack_size,unit_type,category,distributor_root,distributor_leaf,manufacturer,quantity,price,total\n');
    for (const cus of this.customers) {
      const fila: any[] = [];
      Object.entries(cus).forEach(elemnt => {
        const [key, value] = elemnt;
        fila.push(value);
      });
      resul.push(fila.join(',')  + '\n');
    }

    var blob = new Blob(resul, { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
  
    // Create a link to download it
    var pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', 'data.svc');
    pom.click();
  }


    
}
