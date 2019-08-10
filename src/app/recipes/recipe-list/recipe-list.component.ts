import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipde.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test', 'https://www.momontimeout.com/wp-content/uploads/2012/05/biscuit-recipe-easy-733x1000.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
