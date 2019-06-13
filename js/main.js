/* Toggles menu back and forth */
var menu = document.getElementById('navbar');
function myFunction() {
  if (menu.style.display === 'none' || !menu.style.display) {
    menu.style.display = 'initial';
  } else {
    menu.style.display = 'none';
  }
}

/* When clicking on list it calls the function myFunction() */
var ul = document.getElementById('menulist');
ul.onclick = function() {
  if (x.matches) {
    myFunction();
  }
};

/* This variable to make sure the menu doesn't disappear on full-sized screens */
var x = window.matchMedia('(max-width: 780px)');
