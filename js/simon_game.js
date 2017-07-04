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
    var isUserTurn = true;
    
    var redButton =  document.getElementById('redButton');
    redButton.addEventListener('mouseup', function() {
	if (isUserTurn) {
	    var btn = this;
	    btn.style['background-color']= '#F40000';
	    setTimeout(function() {
		btn.style['background-color'] = '#CC0000';
	    }, 700);
	}
    });

    var yellowButton =  document.getElementById('yellowButton');
    yellowButton.addEventListener('mouseup', function() {
	if (isUserTurn) {
	    var btn = this;
	    btn.style['background-color']= '#FFF028';
	    setTimeout(function() {
		btn.style['background-color'] = '#E5D600';
	    }, 700);
	}
    });

    var greenButton =  document.getElementById('greenButton');
    greenButton.addEventListener('mouseup', function() {
	if (isUserTurn) {
	    var btn = this;
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
	    btn.style['background-color']= '#2861FF';
	    setTimeout(function() {
		btn.style['background-color'] = '#003ADB';
	    }, 700);
	}
    });

};
