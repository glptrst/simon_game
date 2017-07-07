/*
  red: #CC0000;
  ligth-red: #F40000;

  yellow: #E5D600;
  light-yellow: #FFF028;

  green: #029E00;
  light green: #31FF2D;

  blue: #003ADB;
  light-blue: #2861FF;
*/

window.onload = function() {
    var buttons= {
	redButton: {
	    id: 'redButton',
	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
	},
	yellowButton: {
	    id: 'yellowButton',
	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
	},
	greenButton: {
	    id: 'greenButton',
	    audio :new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
	},
	blueButton: {
	    id: 'blueButton',
	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
	}
    };
    
    var gameStack = ['redButton', 'yellowButton'];
    
    var startBtn = document.getElementById('start');
    startBtn.addEventListener('click', startGame);

    function startGame() {
	for (let i = 0; i < gameStack.length; i++) {

	}
    }

    // var isGameOn = false;

    // var counter = 0;
    // var gameStack = [];
    
    // var buttons = ['redButton', 'yellowButton', 'greenButton', 'blueButton'];

    // var strict = false;
    
    // var isUserTurn = false;

    // var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    // var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    // var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    // var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

    // function startGame() {
    // 	//play old buttons
    // 	for (var i = 0; i < counter; i++) {
	    
    // 	}
    // 	//play a new button 
    // 	var randomButton = buttons[randomRange(0, 3)];
    // 	counter++;
    // 	gameStack.push(randomButton);
    // }
    
    // var redButton =  document.getElementById('redButton');
    // redButton.addEventListener('mouseup', function() {
    // 	if (isGameOn && isUserTurn) {
    // 	    var btn = this;
    // 	    redAudio.play();
    // 	    btn.style['background-color']= '#F40000';
    // 	    setTimeout(function() {
    // 		btn.style['background-color'] = '#CC0000';
    // 	    }, 500);
    // 	}
    // });

    // var yellowButton =  document.getElementById('yellowButton');
    // yellowButton.addEventListener('mouseup', function() {
    // 	if (isGameOn && isUserTurn) {
    // 	    var btn = this;
    // 	    yellowAudio.play();
    // 	    btn.style['background-color']= '#FFF028';
    // 	    setTimeout(function() {
    // 		btn.style['background-color'] = '#E5D600';
    // 	    }, 500);
    // 	}
    // });

    // var greenButton =  document.getElementById('greenButton');
    // greenButton.addEventListener('mouseup', function() {
    // 	if (isGameOn && isUserTurn) {
    // 	    var btn = this;
    // 	    greenAudio.play();
    // 	    btn.style['background-color']= '#31FF2D';
    // 	    setTimeout(function() {
    // 		btn.style['background-color'] = '#029E00';
    // 	    }, 700);
    // 	}
    // });

    // var blueButton =  document.getElementById('blueButton');
    // blueButton.addEventListener('mouseup', function() {
    // 	if (isGameOn && isUserTurn) {
    // 	    var btn = this;
    // 	    blueAudio.play();
    // 	    btn.style['background-color']= '#2861FF';
    // 	    setTimeout(function() {
    // 		btn.style['background-color'] = '#003ADB';
    // 	    }, 700);
    // 	}
    // });

    // document.getElementsByTagName('input')[0].addEventListener('click', toggleGameOnOff);

    // function toggleGameOnOff() {
    // 	if (isGameOn === true) {
    // 	    isGameOn = false;
    // 	    console.log('is false');
    // 	}
    // 	else {
    // 	    isGameOn = true;
    // 	    console.log('is true!');
    // 	}
    // }

    // // generate random number between a range
    // function randomRange(myMin, myMax) {
    // 	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
    // }

};
