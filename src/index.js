import './index.css';
import foodAreaes from '../modules/foodArea.js';
import foodCategories from '../modules/foodCategories.js';
import foodIngredients from '../modules/foodIngredients.js';
import { foodRandomSelection } from '../modules/foodRandomSelection.js';
import { createPop } from '../modules/foodComment.js';

document.addEventListener('DOMContentLoaded', foodAreaes.displayAreaes);
document.addEventListener('DOMContentLoaded', foodCategories.displayCategories);
document.addEventListener('DOMContentLoaded', foodIngredients.displayIngredients);
document.addEventListener('DOMContentLoaded', foodRandomSelection.displayRandomFoodSelection);
window.setTimeout(createPop, 2700);
