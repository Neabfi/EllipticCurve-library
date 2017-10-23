let menu_addition = document.querySelector('#menu_addition');
let menu_multiplication = document.querySelector('#menu_multiplication');

menu_addition.addEventListener('click', function() {
	menu_multiplication.classList.remove("selected");
	menu_addition.classList.add("selected");
	ellipticCurve.mode = 'add';
});

menu_multiplication.addEventListener('click', function() {
	menu_addition.classList.remove("selected");
	menu_multiplication.classList.add("selected");
	ellipticCurve.mode = 'mult';
});