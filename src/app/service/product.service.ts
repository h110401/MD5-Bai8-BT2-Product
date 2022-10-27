import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    id: 'UUID1',
    name: 'IPhone 12',
    price: 2400000,
    description: 'New',
    category: {
      id: 'C1',
      name: 'IPhone'
    }
  }, {
    id: 'UUID2',
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new',
    category: {
      id: 'C1',
      name: 'IPhone'
    }
  }, {
    id: 'UUID3',
    name: 'IPhone X',
    price: 968000,
    description: '97%',
    category: {
      id: 'C1',
      name: 'IPhone'
    }
  }, {
    id: 'UUID4',
    name: 'IPhone 8',
    price: 7540000,
    description: '98%',
    category: {
      id: 'C1',
      name: 'IPhone'
    }
  }, {
    id: 'UUID5',
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new',
    category: {
      id: 'C1',
      name: 'IPhone'
    }
  }];

  constructor() {
  }

  getAll() {
    return this.products
  }

  save(product: Product) {
    this.products.push(product);
  }

  find(id: string | any) {
    return this.products.find(pr => pr.id === id);
  }

  update(id: string, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
        break;
      }
    }
  }

  remove(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }
}
