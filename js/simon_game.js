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
    var isGameOn = false;

    var counter = 0;

    var strict = false;
    
    var isUserTurn = true;

    var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    
    var redButton =  document.getElementById('redButton');
    redButton.addEventListener('mouseup', function() {
	if (isUserTurn) {
	    var btn = this;
	    redAudio.play();
	    btn.style['background-color']= '#F40000';
	    setTimeout(function() {
		btn.style['background-color'] = '#CC0000';
	    }, 500);
	}
    });

    var yellowButton =  document.getElementById('yellowButton');
    yellowButton.addEventListener('mouseup', function() {
	if (isUserTurn) {
	    var btn = this;
	    yellowAudio.play();
	    btn.style['background-color']= '#FFF028';
	    setTimeout(function() {
		btn.style['background-color'] = '#E5D600';
	    }, 500);
	}
    });

    var greenButton =  document.getElementById('greenButton');
    greenButton.addEventListener('mouseup', function() {
	if (isUserTurn) {
	    var btn = this;
	    greenAudio.play();
	    btn.style['background-color']= '#31FF2D';
	    setTimeout(function() {
		btn.style['background-color'] = '#029E00';
	    }, 700);
	}
    });

    var blueButton =  document.getElementById('blueButton');
    blueButton.addEventListener('mouseup', function() {
	if (isUserTurn) {
	    var btn = this;
	    blueAudio.play();
	    btn.style['background-color']= '#2861FF';
	    setTimeout(function() {
		btn.style['background-color'] = '#003ADB';
	    }, 700);
	}
    });

};
