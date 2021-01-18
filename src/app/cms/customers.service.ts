import { Injectable } from '@angular/core';
import { MOCKCUSTOMERS } from './mock-customers';
import { CUSTOMERS } from './customers.model';

@Injectable()

export class CustomersService {
  public getCustomers(): CUSTOMERS[] {
    const newArray = [];
    newArray.push(MOCKCUSTOMERS);
    return newArray;
  }

  public addEntity(tuplet: object) {
    console.dir(tuplet);
  }

  public updateEntity(tuplet: object) {
    console.dir(tuplet);
  }

  public deleteEntity(tuplet: object) {
    console.dir(tuplet);
  }

  public groupEntity(tuplet: object) {
    console.dir(tuplet);
  }
}
