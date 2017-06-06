import { Component } from '@angular/core';
import { Recipe } from './recipe';

const RECIPES: Recipe[] = [
  { title: 'Airplane Food',
    description: 'no other choice',
    imageURL: 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/3700298/airplane-food.0.jpg',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: true;
  },
  { title: 'Cat Food',
    description: 'better than dog foood',
    imageURL: 'http://www.thehealthycookingcoach.com/wp-content/uploads/2015/08/cat-and-food.jpg',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: false;
  },
  { title: 'Pazta',
    description: 'like small, edible snakes',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Pasta_2006_6.jpg/406px-Pasta_2006_6.jpg',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: true;
  },
  { title: 'Catplane Food',
    description: 'yay',
    imageURL: '',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: true;
  },
  { title: 'La-zag-na',
    description: 'layers, yay',
    imageURL: 'https://s-media-cache-ak0.pinimg.com/originals/d9/73/6b/d9736bba80d5ab7a1513e29ada878549.jpg',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: true;
  },
  { title: 'Meat Stuff',
    description: 'it used to be alive',
    imageURL: '',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: true;
  },
  { title: 'Lunchables',
    description: 'pizza, of course',
    imageURL: 'https://cdn1.vox-cdn.com/uploads/chorus_asset/file/3700298/airplane-food.0.jpg',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: false;
  },
  { title: 'Super Soup',
    description: 'Water featuring: other stuff',
    imageURL: '',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: false;
  },
  { title: 'Fried Dragon',
    description: 'ironic?',
    imageURL: 'http://www.thinkgeek.com/images/products/zoom/1144_canned_dragon_meat.jpg',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: false;
  },
  { title: 'Serious Food',
    description: 'seriously delicious',
    imageURL: '',
    ingredients: ['plastic', 'something resembling bread', 'plane gravy', 'mystery meat'],
    directions: ['microwave', 'remove top layer of plastic', 'charge $10'],
    tried: true;
  },
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
  <div class="col-md-6" id="recipe-list">
    <ul>
      <li *ngFor="let recipe of recipes" (click)="selectRecipe(recipe)" [class.checked]="recipe.tried === true" [class.selected]="recipe === selectedRecipe" >{{recipe.title}}</li>
    </ul>
  </div>
  <div class="col-md-6" id="selected-recipe">
    <div *ngIf="selectedRecipe">
    <div class="checkbox">
    <label><input type="checkbox" [(ngModel)]="selectedRecipe.tried" [value]="true">Tried Recipe</label>
    </div>
      <h1>{{selectedRecipe.title}}</h1>
      <h3>{{selectedRecipe.description}}</h3>
      <img *ngIf="selectedRecipe.imageURL" [src]="selectedRecipe.imageURL">
      <img *ngIf="!selectedRecipe.imageURL" src="http://orewa.org/wp-content/uploads/2013/12/healthy-food-pictures-tumblr.jpg">
      <div id="recipe-details">
        <h5>Ingredients:</h5>
        <ul>
          <li *ngFor="let ingredient of selectedRecipe.ingredients">{{ingredient}}</li>
        </ul>
        <h5>Directions:</h5>
        <ul>
          <li *ngFor="let direction of selectedRecipe.directions">{{direction}}</li>
        </ul>
      </div>
      <button class="btn btn-info"  *ngIf="!formDisplay" (click)='toggleEditForm()'>Edit Recipe</button>
      <div *ngIf="formDisplay" id="edit-form">
        <div class='form-group'>
          <label>Title</label>
          <input
          class="form-control" [(ngModel)]="selectedRecipe.title">
        </div>
        <div class='form-group'>
          <label>Description</label>
          <input
          class="form-control"
          [(ngModel)]="selectedRecipe.description">
        </div>
        <div class='form-group form-inline'>
          <label>Add ingredient</label>
          <input
          class="form-control"
          [(ngModel)]="ingredient">
          <button class="btn btn-primary" (click)="addIngredient(selectedRecipe, ingredient)">
          Add
          </button>
        </div>
        <div class='form-group form-inline'>
          <label>Add direction</label>
          <input
          class="form-control"
          [(ngModel)]="direction">
          <button class="btn btn-primary" (click)="addDirection(selectedRecipe, direction)">
          Add
          </button>
        </div>
        <button class="btn btn-success" (click)='toggleEditForm()'>Done</button>
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
  formDisplay: boolean = false;

  editRecipe(recipe: Recipe) {
    console.log(recipe.imageURL);
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  addIngredient(recipe: Recipe, ingredient: String) {
    recipe.ingredients.push(ingredient);
  }

  addDirection(recipe: Recipe, direction: String) {
    recipe.directions.push(direction);
  }

  toggleEditForm() {
    if(this.formDisplay === true) {
      this.formDisplay = false;
    } else {
      this.formDisplay = true;
    }
  }


}
