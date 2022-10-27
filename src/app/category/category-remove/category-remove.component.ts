import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-remove',
  templateUrl: './category-remove.component.html',
  styleUrls: ['./category-remove.component.scss']
})
export class CategoryRemoveComponent implements OnInit {
  category: Category | any;

  constructor(
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
  }

  submit() {
    this.categoryService.remove(this.category.id);
    this.router.navigate(['/category/list']);
  }


}
