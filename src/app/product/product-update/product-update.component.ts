import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: Product | any;
  productForm: FormGroup | any;
  allCate: Category[] | any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id')
      if (typeof id === "string") this.product = this.productService.find(id);
    })
    this.productForm = this.fb.group({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      description: this.product.description,
      category: this.product.category
    });
    this.allCate = this.categoryService.getAll();
  }

  submit() {
    let product: Product = this.productForm.value;
    this.productService.update(this.product.id, product);
    this.product = this.productForm.value;
    this.router.navigate(['product/list']);
  }

}
