"use strict";
window.onload = function() {

    // Constructor for buttons
    function Button (id, audio, color, lightColor) {
    	this.id = id;
    	this.node = document.getElementById(this.id);
    	this.audio = audio;
    	this.color = color;
    	this.lightColor = lightColor;
    	this.activate = function () {
    	    var btn = this;
    	    btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
    	    btn.audio.play();
    	    setTimeout(function() {
    		btn.node.setAttribute('style', 'background-color: ' + this.color);
    	    }, 500);
    	};
    }

    // Create buttons
    var btn0 = new Button ('btn0', new Audio('./audio/simonSound1.mp3'), '#CC0000', '#F40000');
    var btn1 = new Button ('btn1', new Audio('./audio/simonSound2.mp3'), '#E5D600', '#FFF028');
    var btn2 = new Button ('btn2', new Audio('./audio/simonSound3.mp3'), '#029E00', '#31FF2D');
    var btn3 = new Button ('btn3', new Audio('./audio/simonSound4.mp3'), '#003ADB', '#2861FF');

    var buttons = [btn0, btn1, btn2, btn3];

    // random game sequence 
    var sequence = randomSequence();

    var gameIsOn = false;
    var strict = false;
    var isUserTurn = false;

    var counter = 0;
    var userMoveIndex = 0;

    // store the ID of the interval used to show the game sequence
    var intervalID;

    // start game with start button is clicked
    document.getElementById('start').addEventListener('click', function() {
	if (gameIsOn && counter === 0) { // start the game
	    showSequence(sequence, counter, true);
	} else if (gameIsOn && counter !== 0) { // restart the game
	    clearInterval(intervalID);
	    counter = 0;
	    showUpdateCounter();
	    userMoveIndex = 0;
	    isUserTurn = false;
	    sequence = randomSequence();
	    setTimeout(function(){
		showSequence(sequence, counter, true);
	    }, 1000);
	}
    });

    // toggle gameIsOn by clicking the switch Off/On
    document.getElementsByTagName('input')[0].addEventListener('click', function() {
	if (gameIsOn === true)
	    gameIsOn = false;
	else
	    gameIsOn = true;
	
	// TODO
	// If the games was on all data should be reset
    });

    // toggle strict by clicking the switch
    document.getElementsByTagName('input')[1].addEventListener('click', function() {
	if (strict === true)
	    strict = false;
	else
	    strict = true;
    });

    //check for user move
    function checkMove(answer) {
	// if user answer is correct
	if (answer === sequence[userMoveIndex-1]) {
	    console.log('correct');
	    // if userMoveIndex is the same as counter
	    if (userMoveIndex === counter) {
	        // if counter is 20
		if (counter === 20) {
	            // game has been won. Game Over.
		    console.log('game won.');
		    notifyUser('You won the game!');
		    // start game over
		    counter = 0;
		    showUpdateCounter();
		    userMoveIndex = 0;
		    isUserTurn = false;
		    sequence = randomSequence();
		    setTimeout(function(){
			showSequence(sequence, counter, true);
		    },2000);
		} else { // if counter is less than 20
		    // set userMoveIndex to 0
		    userMoveIndex = 0;
		    // set isUserTurn to false
		    isUserTurn = false;
		    // show sequence
		    setTimeout(function(){
			showSequence(sequence, counter, true);
		    }, 2000);
		}
	    } else {// if userMoveIndex is not the same as counter
	    	// wait for other answers
	    }
	} else { // if user answer is not correct
	    console.log('Wrong!');
	    notifyUser('Wrong!');
	    // if we are in strict mode
	    if (strict){
	        // reset everything. Game Over.
		console.log('strict!');
		// reset everything and start showing new sequence
		counter = 0;
		userMoveIndex = 0;
		isUserTurn = false;
		sequence = randomSequence();
		setTimeout(function(){
		    showSequence(sequence, counter, true);
		}, 2000);
	    } else { // if we are not in strict mode
		// set userMoveIndex to 0
		userMoveIndex = 0;
		// set isUserTurn to false
		isUserTurn = false;
		// show the same sequence till the same point
		setTimeout(function(){
		    showSequence(sequence, counter, false);
		}, 2000);
	    }
	}
    }

    // Show sequence of buttons till limit and set isUserTurn to true.
    function showSequence(seq, limit, updateCounter) {
	if (updateCounter) {
	    limit++;
	    counter++;
	    showUpdateCounter();
	}
	
	var i = 0;
	var activateSequence = setInterval(function() {
	    buttons[seq[i]].activate();
    	    i++;
	    if (i >= limit) {
		// stop showing sequence
    		clearInterval(activateSequence);
		// enable user to click on buttons
		isUserTurn = true;
	    }
	}, 1000);

	// store inteval id in the global scope (in case we have to stop to restart the game)
	intervalID = activateSequence;
    }
            
    btn0.node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    btn0.activate();
	    userMoveIndex++;
	    checkMove(0, userMoveIndex);
	}
    });

    btn1.node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    btn1.activate();
	    userMoveIndex++;
	    checkMove(1, userMoveIndex);
	}
    });

    btn2.node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    btn2.activate();
	    userMoveIndex++;
	    checkMove(2, userMoveIndex);
	}
    });

    btn3.node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    btn3.activate();
	    userMoveIndex++;
	    checkMove(3, userMoveIndex);
	}
    });

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

    // Notify user with message on the screen for a couple of sec
    function notifyUser(message) {
	var el = document.getElementById('notify');
	var msg = document.createTextNode(message);
	el.appendChild(msg);
	setTimeout(function(){
	    el.firstChild.remove();
	},2000);
    }
};
