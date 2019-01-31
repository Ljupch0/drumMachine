const buttons = document.querySelectorAll('.button');

function highlight (btn) {
  btn.style.backgroundColor = "#999999";
}

function unhighlight (btn) {
  btn.style.backgroundColor = "#696969";
}

buttons.forEach((button) => {
	button.addEventListener('mouseover', () => {
  	highlight(button);
  });
  button.addEventListener('mouseout', () => {
  	unhighlight(button);
  });
});
