import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(values: any, arg: string): any {
    if (arg === "" || arg.length < 3) return values;

    const resultCustomer = [];
console.log(arg);
    for (const cus of values){
      if (cus.product_description.toLowerCase().indexOf(arg.toLowerCase()) >= 0){
        resultCustomer.push(cus);
      }

    }
    return resultCustomer;
  }

}
