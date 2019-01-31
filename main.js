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


const button2=document.getElementById('2')
const button3=document.getElementById('3')
const button4=document.getElementById('4')
const button5=document.getElementById('5')
const button6=document.getElementById('6')
const button7=document.getElementById('7')
const button8=document.getElementById('8')
const button9=document.getElementById('9')



button2.addEventListener('mousedown', playKick)
button3.addEventListener('mousedown', playKick)
button4.addEventListener('mousedown', playKick)
button5.addEventListener('mousedown', playKick)
button6.addEventListener('mousedown', playKick)
button7.addEventListener('mousedown', playKick)
button8.addEventListener('mousedown', playKick)
button9.addEventListener('mousedown', playKick)
