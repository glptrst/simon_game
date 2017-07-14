window.onload = function() {

    // random game sequence 
    var sequence = randomSequence();

    var sequenceTest = [2,2,2,2];
    
    var counter = 10;

    // Game's buttons
    var buttons= [
    	{
    	    id: 'btn0',
	    node: document.getElementById('btn0'),
    	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
	    color: '#CC0000',
	    lightColor: '#F40000',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
    	},
    	{
    	    id: 'btn1',
	    node: document.getElementById('btn1'),
    	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
	    color: '#E5D600',
	    lightColor: '#FFF028',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
	},
    	{
    	    id: 'btn2',
	    node: document.getElementById('btn2'),
    	    audio :new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
	    color: '#029E00',
	    lightColor: '#31FF2D',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
	},
    	{
    	    id: 'btn3',
	    node: document.getElementById('btn3'),
    	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
	    color: '#003ADB',
	    lightColor: '#2861FF',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
	}
    ];

    showSequence(sequence, 20);

    // show sequence of buttons till n
    function showSequence(seq, n) {
	var i = 0;
	var activateSequence = setInterval(function() {
	    buttons[seq[i]].activate();
    	    i++;
    	    if (i >= n)
    		clearInterval(activateSequence);
	}, 1000);
    }

    // return array of random sequence of 20 buttons
    function randomSequence() {
	var arr = [];
	for (var i = 0; i < 20; i ++) {
	    arr.push(randomRange(0,3));
	}
	return arr;
    }
    
    // generate random number between a range
    function randomRange(myMin, myMax) {
    	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
    }


    


    
    
    
    // var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    // var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    // var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    // var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

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

};
