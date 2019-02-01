const buttons = document.querySelectorAll('.button');

function highlight (btn) {
  btn.style.backgroundColor = "#777777";
}

function unhighlight (btn) {
  btn.style.backgroundColor = "#696969";
}

function press (btn) {
  btn.style.backgroundColor = "#999999";
}

const bassDrum = new Audio('TR808all/TR808WAV/BD/BD0000.wav');
const playBassDrum = () => {
  bassDrum.play()
}

const snare = new Audio('TR808all/TR808WAV/SD/SD2510.wav')
const playSnare = () => {
  snare.play()
}

const lowTom = new Audio('TR808all/TR808WAV/LT/LT00.wav')
const playLowTom = () => {
  lowTom.play()
}

const midTom = new Audio('TR808all/TR808WAV/MT/MT25.wav')
const playMidTom = () => {
  midTom.play()
}

const highTom = new Audio('TR808all/TR808WAV/HT/HT25.wav')
const playHighTom = () => {
  highTom.play()
}

const lowConga = new Audio('TR808all/TR808WAV/LC/LC00.wav')
const playLowConga = () => {
  lowConga.play()
}

const midConga = new Audio('TR808all/TR808WAV/MC/MC25.wav')
const playMidConga = () => {
  midConga.play()
}

const highConga = new Audio('TR808all/TR808WAV/HC/HC10.wav')
const playHighConga = () => {
  highConga.play()
}

const rimshot = new Audio('TR808all/TR808WAV/RS/RS.wav')
const playRimshot = () => {
  rimshot.play()
}

const claves = new Audio('TR808all/TR808WAV/CL/CL.wav')
const playClaves = () => {
  claves.play()
}

const handClap = new Audio('TR808all/TR808WAV/CP/CP.wav')
const playHandClap = () => {
  handClap.play()
}

const maracas = new Audio('TR808all/TR808WAV/MA/MA.wav')
const playMaracas = () => {
  maracas.play()
}

const cowbell = new Audio('TR808all/TR808WAV/CB/CB.wav')
const playCowbell = () => {
  cowbell.play()
}

const cymbal = new Audio('TR808all/TR808WAV/CY/CY2525.wav')
const playCymbal = () => {
  cymbal.play()
}

const openHat = new Audio('TR808all/TR808WAV/OH/OH50.wav')
const playOpenHat = () => {
  openHat.play()
}

const closedHat = new Audio('TR808all/TR808WAV/CH/CH.wav')
const playClosedHat = () => {
  closedHat.play()
}


/* CSS event listeners to highlight buttons
on hover and click*/

buttons.forEach((button) => {
	button.addEventListener('mouseover', () => {
  	highlight(button);
  });
  button.addEventListener('mouseout', () => {
  	unhighlight(button);
  });
  button.addEventListener('mousedown', () => {
  	press(button);
  });
  button.addEventListener('mouseup', () => {
  	highlight(button);
  });
});

/* for (i=1; i<10; i++) {
  let buttoni=document.getElementById('i');
} */


/* button variable declaration */
const button1=document.getElementById('1')
const button2=document.getElementById('2')
const button3=document.getElementById('3')
const button4=document.getElementById('4')
const button5=document.getElementById('5')
const button6=document.getElementById('6')
const button7=document.getElementById('7')
const button8=document.getElementById('8')
const button9=document.getElementById('9')
const button10=document.getElementById('10')
const button11=document.getElementById('11')
const button12=document.getElementById('12')
const button13=document.getElementById('13')
const button14=document.getElementById('14')
const button15=document.getElementById('15')
const button16=document.getElementById('16')


/* button specific event listeners that trigger sounds*/

button1.addEventListener('mousedown', playCowbell)
button2.addEventListener('mousedown', playLowConga)
button3.addEventListener('mousedown', playMidConga)
button4.addEventListener('mousedown', playHighConga)
button5.addEventListener('mousedown', playMaracas)
button6.addEventListener('mousedown', playOpenHat)
button7.addEventListener('mousedown', playClosedHat)
button8.addEventListener('mousedown', playClaves)
button9.addEventListener('mousedown', playHandClap)
button10.addEventListener('mousedown', playSnare)
button11.addEventListener('mousedown', playCymbal)
button12.addEventListener('mousedown', playRimshot)
button13.addEventListener('mousedown', playBassDrum)
button14.addEventListener('mousedown', playLowTom)
button15.addEventListener('mousedown', playMidTom)
button16.addEventListener('mousedown', playHighTom)
