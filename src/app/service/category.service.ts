import {Injectable} from '@angular/core';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 'C1',
    name: 'IPhone'
  }, {
    id: 'C2',
    name: 'Samsung',
  }, {
    id: 'C3',
    name: 'LG',
  }];

  constructor() {
  }

  getAll() {
    return this.categories;
  }

  save(category: Category) {
    this.categories.push(category);
  }

  find(id: string | any) {
    return this.categories.find(cate => cate.id === id)
  }

  update(id: string, category: Category) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories[i] = category;
      }
    }
  }

  remove(id: string) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories.splice(i, 1);
      }
    }
  }
}
