import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Object', 'This is a test Object',
    'https://thecleaneatingcouple.com/wp-content/uploads/2017/01/healthy-orange-chicken-1-1.jpg'
    ),
    new Recipe('Test Object', 'This is a test Object',
      'https://thecleaneatingcouple.com/wp-content/uploads/2017/01/healthy-orange-chicken-1-1.jpg'
    ),
    new Recipe('Test Object', 'This is a test Object',
      'https://thecleaneatingcouple.com/wp-content/uploads/2017/01/healthy-orange-chicken-1-1.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
