const buttons = document.querySelectorAll('.button');

function highlight (btn) {
  btn.style.backgroundColor = "#999999";
}

function unhighlight (btn) {
  btn.style.backgroundColor = "#696969";
}

const kick = new Audio('TR808all/TR808WAV/BD/BD0000.wav');
const playKick = () => {
  kick.play()
}


buttons.forEach((button) => {
	button.addEventListener('mouseover', () => {
  	highlight(button);
  });
  button.addEventListener('mouseout', () => {
  	unhighlight(button);
  });
});

/* for (i=1; i<10; i++) {
  let buttoni=document.getElementById('i');
} */

const button1=document.getElementById('1')
button1.addEventListener('mousedown', playKick)
