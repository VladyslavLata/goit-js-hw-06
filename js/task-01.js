const firstItemsEl = document.querySelectorAll('.item');
const titlesEl = document.querySelectorAll('h2');

console.log(`Number of categories: ${firstItemsEl.length}`);

titlesEl.forEach(titleEL => {
  console.log(`Category: ${titleEL.textContent}`);
  console.log(`Elements: ${titleEL.nextElementSibling.children.length}`);
});

