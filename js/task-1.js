'use strict';

const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('.item');

console.log('Total categories:', categories.length);

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('li').length;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});