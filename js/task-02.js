const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

const makeItemIngredient = (ingredient) => {
  const itemEL = document.createElement('li');
  itemEL.classList.add('item');
  itemEL.textContent = `${ingredient}`;
  return itemEL;
}
  
const itemsIngredients = ingredients.map(makeItemIngredient);
listEl.append(...itemsIngredients);

