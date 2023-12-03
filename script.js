const $hamburger = document.querySelector('.hamburger');
const $nav_ul = document.querySelector('nav ul');
const $nav_button = document.querySelector('nav button');
console.log($nav_ul);
$hamburger.addEventListener('click',()=>{
  $nav_ul.classList.toggle('active');
  $nav_button.classList.toggle('active');
})