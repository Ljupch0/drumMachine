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



// Execute a function when the user releases a key on the keyboard
document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 49) {
    playCowbell();
    press(button1);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 49) {
    unhighlight(button1);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 50) {
    playLowConga();
    press(button2);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 50) {
    unhighlight(button2)
  }
});

document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 51) {
    playMidConga();
    press(button3);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 51) {
    unhighlight(button3);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 52) {
    playHighConga();
    press(button4);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 52) {
    unhighlight(button4);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 81) {
    playMaracas();
    press(button5);
  }
});


document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 81) {
    unhighlight(button5);
  }
});

document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 87) {
    playOpenHat();
    press(button6);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 87) {
    unhighlight(button6);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 69) {
    playClosedHat();
    press(button7);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 69) {
    unhighlight(button7);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 82) {
    playClaves();
    press(button8);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 82) {
    unhighlight(button8);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 65) {
    playHandClap();
    press(button9);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 65) {
  unhighlight(button9);
  }
});

document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 83) {
    playSnare();
    press(button10);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 83) {
    unhighlight(button10);
  }
});

document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 68) {
    playCymbal();
    press(button11);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 68) {
    unhighlight(button11);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 70) {
    playRimshot();
    press(button12);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 70) {
    unhighlight(button12);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 90) {
    playBassDrum();
    press(button13);
  }
});


document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 90) {
    unhighlight(button13);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 88) {
    playLowTom();
    press(button14);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 88) {
    unhighlight(button14);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 67) {
    playMidTom();
    press(button15);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 67) {
    unhighlight(button15);
  }
});


document.body.addEventListener("keydown", function(event) {
 if (event.keyCode === 86) {
    playHighTom();
    press(button16);
  }
});

document.body.addEventListener("keyup", function(event) {
 if (event.keyCode === 86) {
    unhighlight(button16);
  }
});
