import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  parentCategoryPath: any[] = [];


  constructor(public categoryService: CategoryService,
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.init()
  }

  init() {
    if (this.categories) return;
    if (this.config.data) {
      let data = this.config.data as Category;
      this.categories = data.Images;
    }
    else
      this.categories = this.categoryService.availableCategories;
  }

  loadCategoryImageGallery(category: Category) {
    if (!category.Images) return;
    if (category.LoadInPopup) {
      this.loadInPopup(category);
      return;
    }
    this.parentCategoryPath.push(this.categories);
    this.categories = category.Images;
  }

  loadInPopup(category: Category) {
    this.ref = this.dialogService.open(CategoriesComponent, {
      header: category.Name,
      width: '95%',
      height: '95%',
      data: category,
      contentStyle: { "height": "100%", "overflow": "auto" },
    });

  }

  goBack() {
    if (!this.parentCategoryPath.length) return;//already at top
    let index = this.parentCategoryPath.length - 1;
    this.categories = this.parentCategoryPath[index];
    this.parentCategoryPath.splice(index, 1);
  }


}
