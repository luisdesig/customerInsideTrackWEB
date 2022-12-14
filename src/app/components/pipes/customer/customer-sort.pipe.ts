import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/clases/customer';

@Pipe({
  name: 'customerSort'
})
export class CustomerSortPipe implements PipeTransform {

  transform(values: any[], arg: any): any {
    let customerResult;
    console.log(arg);

    if (arg === "") return values;
    switch(+arg){
      case 1:
        console.log("filtro por ID");
        customerResult = values.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });
        break;
      case 2:
        console.log("filtro por manufacturer");
        customerResult = values.sort((a, b) => {
          if (a.customer_root < b.customer_root) {
            return -1;
          }
          if (a.customer_root > b.customer_root) {
            return 1;
          }
          return 0;
        });
        break;
      case 3:
        console.log("filtro por manufacturer");
        customerResult = values.sort((a, b) => {
          if (a.customer_leaf < b.customer_leaf) {
            return -1;
          }
          if (a.customer_leaf > b.customer_leaf) {
            return 1;
          }
          return 0;
        });
        break;
      case 4:
        console.log("filtro por manufacturer");
        customerResult = values.sort((a, b) => {
          if (a.product_description < b.product_description) {
            return -1;
          }
          if (a.product_description > b.product_description) {
            return 1;
          }
          return 0;
        });
        break;
      case 5:
        console.log("filtro por manufacturer");
        customerResult = values.sort((a, b) => {
          if (a.manufacturer < b.manufacturer) {
            return -1;
          }
          if (a.manufacturer > b.manufacturer) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        console.log("filtro por DEFAULT");
        customerResult = values.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });
    }
    return customerResult;
  }
}
