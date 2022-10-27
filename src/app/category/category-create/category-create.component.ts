import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id: '',
      name: ''
    });
  }

  submit() {
    const product = this.categoryForm.value;
    this.categoryService.save(product);
    this.categoryForm.reset();
    this.router.navigate(['/category/list']);
  }

}
