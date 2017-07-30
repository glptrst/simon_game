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
    var strict = true;
    var isUserTurn = false;

    var counter = 0;
    var userMoveIndex = 0;

    document.getElementById('start').addEventListener('click', function() {
	if (gameIsOn && counter === 0)
	    showSequence(sequence, counter, true);
    });

    document.getElementsByTagName('input')[0].addEventListener('click', function() {
	if (gameIsOn === true)
	    gameIsOn = false;
	else
	    gameIsOn = true;
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


    }
            
    buttons[0].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[0].activate();
	    userMoveIndex++;
	    checkMove(0, userMoveIndex);
	}
    });

    buttons[1].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[1].activate();
	    userMoveIndex++;
	    checkMove(1, userMoveIndex);
	}
    });

    buttons[2].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[2].activate();
	    userMoveIndex++;
	    checkMove(2, userMoveIndex);
	}
    });

    buttons[3].node.addEventListener('mouseup', function(){
	if (gameIsOn && isUserTurn) {
	    buttons[3].activate();
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
};
