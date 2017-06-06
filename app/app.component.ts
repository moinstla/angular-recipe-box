import { Component } from '@angular/core';
import { Recipe } from './recipe';

const RECIPES: Recipe[] = [
  { title: 'Airplane Food', description: 'no other choice', imageURL: 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/3700298/airplane-food.0.jpg', ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'], directions: ['microwave', 'remove top layer of plastic', 'charge $10'] },
  { title: 'Cat Food', description: 'no other choice', ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'], directions: ['microwave', 'remove top layer of plastic', 'charge $10'] }
];

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <div class="container" id="header">
      <h1>{{title}}</h1>
    </div>
  </div>
  <div class="container">
    <div class="recipe" *ngFor="let recipe of recipes">
      <div class="row">
      <h1 class="recipe-title" (click)="toggleShow(recipe)">{{recipe.title}}</h1>
      </div>
      <div class="row recipe-details" *ngIf="recipe === this.selectedRecipe">
        <div class="col-md-4">
          <p>{{recipe.description}}</p>
          <img *ngIf="recipe.imageURL" src={{recipe.imageURL}}>
          <img *ngIf="!recipe.imageURL" src="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/food_safety_quiz/650x350_food_safety_quiz.jpg">
          <button (click)="editRecipe(recipe)">Edit Recipe</button>
        </div>
        <div class="col-md-4">
          <h3>ingredients:</h3>
          <ul>
            <li *ngFor="let ingredient of recipe.ingredients">
            {{ingredient}}
            </li>
          </ul>
        </div>
        <div class="col-md-4">
        <h3>directions:</h3>
        <ul>
          <li *ngFor="let direction of recipe.directions">
          {{direction}}
          </li>
        </ul>

        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  title = "Recipe Box";
  recipes = RECIPES;
  selectedRecipe: Recipe;

editRecipe(recipe: Recipe) {
  console.log(recipe.imageURL);
}

  toggleShow(recipe: Recipe): void {
    if (this.selectedRecipe === recipe) {
      this.selectedRecipe = null;
    } else {
      this.selectedRecipe = recipe;
    }
  }

}
