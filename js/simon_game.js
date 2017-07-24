window.onload = function() {
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
		    btn.node.setAttribute('style', 'background-color: ' + this.color);
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
		    btn.node.setAttribute('style', 'background-color: ' + this.color);
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
		    btn.node.setAttribute('style', 'background-color: ' + this.color);
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
		    btn.node.setAttribute('style', 'background-color: ' + this.color);
		}, 500);
	    }
	}
    ];

    // random game sequence 
    var sequence = randomSequence();

    var gameIsOn = false;
    var isUserTurn = false;

    var counter = 1;
    var userMovesIndex = 0;

    document.getElementById('start').addEventListener('click', function() {
	if (gameIsOn)
	    showSequence(sequence, counter);
    });

    document.getElementsByTagName('input')[0].addEventListener('click', function() {
	if (gameIsOn === true)
	    gameIsOn = false;
	else
	    gameIsOn = true;
    });

    //check for user move
    //***********************************TODO***********************************
    function checkMove(answer, indexAnswer) {

	
    }
            
    buttons[0].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[0].activate();
	    userMovesIndex++;
	    checkMove(0, userMovesIndex);
	}
    });

    buttons[1].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[1].activate();
	    userMovesIndex++;
	    checkMove(1, userMovesIndex);
	}
    });

    buttons[2].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[2].activate();
	    userMovesIndex++;
	    checkMove(2, userMovesIndex);
	}
    });

    buttons[3].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[3].activate();
	    userMovesIndex++;
	    checkMove(3, userMovesIndex);
	}
    });

    // Show sequence of buttons till n and set isUserTurn to true.
    function showSequence(seq, n) {
	var i = 1;
	var activateSequence = setInterval(function() {
	    buttons[seq[i]].activate();
    	    i++;
	    if (i > n) {
		// stop showing sequence
    		clearInterval(activateSequence);
	    }
	}, 1000);

	isUserTurn = true;
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

    //show current counter value on the page
    function showUpdateCounter() {
	var el = document.getElementById('counter');
	el.firstChild.nodeValue = String(counter);
    }
};
