import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {
  category: Category | any;
  categoryForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.category = this.categoryService.find(id);
    })
    this.categoryForm = this.fb.group({
      id: this.category.id,
      name: this.category.name
    })
  }

  submit() {
    let category: Category = this.categoryForm.value;
    this.categoryService.update(this.category.id, category);
    this.router.navigate(['/category/list']);
  }
}
