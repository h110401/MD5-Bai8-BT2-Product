import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup | any;
  allCategory: Category[] | any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: '',
      name: '',
      price: '',
      description: '',
      category: null,
    })
    this.allCategory = this.categoryService.getAll();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.save(product);
    // this.productForm.reset();
    this.router.navigate(['product/list']);
  }
}
